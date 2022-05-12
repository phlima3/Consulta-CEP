import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import consultarCep from "cep-promise";
import CEPDados from "../Components/CEPDados";
import { mask, unMask } from "remask";

function translate(cepDados) {
  return {
    ESTADO: cepDados.state,
    CIDADE: cepDados.city,
    BAIRRO: cepDados.neighborhood,
    LOGRADOURO: cepDados.street,
  };
}

function Pesquisa(props) {
  const setResult = props.setResult;
  const navigate = useNavigate();
  const navLoading = useNavigate();
  const ticket = props.ticket;
  const [favoriteCEP, setFavoriteCEP] = useState("");
  const [cepDados, setCepDados] = useState({});
  const [value, setValue] = useState("");

  useEffect(() => {
    const storedCep = localStorage.getItem("favoriteCEP") || "";
    setFavoriteCEP(storedCep);
  }, []);
  useEffect(() => {
    if (!favoriteCEP) {
      return;
    }
    localStorage.setItem("favoriteCEP", favoriteCEP);
    consultarCep(favoriteCEP)
      .then((result) => setCepDados(result))
      .catch((err) => setCepDados({ ERRO: err.message }));
  }, [favoriteCEP]);

  function handleSuccsess(cepDados) {
    const result = translate(cepDados);
    setResult(result);
    navigate("/Resultados");
  }
  function handleError(err) {
    const errorMessage = err.message;

    navigate("/Erro/" + errorMessage);
  }

  function handleSearch(value) {
    const pesquisar = value;
    console.log(pesquisar);
    ticket.current++;
    const currentTicket = ticket.current;
    navLoading("/Carregando/");
    console.log(`value dentro do handleSearch ${pesquisar}`);
    consultarCep(pesquisar)
      .then(
        (result) => currentTicket == ticket.current && handleSuccsess(result)
      )
      .catch((err) => currentTicket == ticket.current && handleError(err));
  }
  function handleChange(event) {
    const value = event.target.value;
    const originalValue = unMask(value);
    const maskedValue = mask(originalValue, ["99999-999"]);
    setValue(maskedValue);
    if (value.length == 9) {
      handleSearch(value);
      console.log(value);
    }
  }
  function handleAddFavorite() {
    setFavoriteCEP(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Qual CEP você deseja pesquisar?</p>
        <input
          value={value}
          onChange={handleChange}
          style={{ margin: 20 }}
          placeholder="Digite seu CEP"
          maxLength={9}
        />
        <button onClick={handleAddFavorite}>SALVAR FAVORITO</button>
        <br />
        <p>FAVORITO: {mask(favoriteCEP, ["99999-999"])}</p>
        <CEPDados cepDados={translate(cepDados)} />
      </header>
    </div>
  );
}

export default Pesquisa;
