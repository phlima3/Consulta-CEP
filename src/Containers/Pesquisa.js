import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import consultarCep from "cep-promise";

function numbersOnly(str) {
  return str.replace(/[^\d]/g, "");
}

function Pesquisa(props) {
  const setResult = props.setResult;
  const navigate = useNavigate();
  const navLoading = useNavigate();
  const ticket = props.ticket;
  const [cepNumber, setCepNumber] = useState("");
  function handleChange(event) {
    const value = event.target.value;
    setCepNumber(numbersOnly(value));
  }
  function limparState() {
    setCepNumber("");
  }
  function handleSuccsess(dadosCEP) {
    const result = {
      ESTADO: dadosCEP.state,
      CIDADE: dadosCEP.city,
      BAIRRO: dadosCEP.neighborhood,
      LOGRADOURO: dadosCEP.street,
    };
    setResult(result);
    navigate("/Resultados");
  }
  function handleError(err) {
    const errorMessage = err.message;

    navigate("/Erro/" + errorMessage);
  }

  function handleSearch(props) {
    ticket.current++;
    const currentTicket = ticket.current;
    navLoading("/Carregando/");
    consultarCep(cepNumber)
      .then(
        (result) => currentTicket == ticket.current && handleSuccsess(result)
      )
      .catch((err) => currentTicket == ticket.current && handleError(err));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Qual CEP você deseja pesquisar?</p>
        <p>Estado atual: {cepNumber}</p>
        <input
          value={numbersOnly(cepNumber)}
          onChange={handleChange}
          style={{ margin: 20 }}
        />
        <button onClick={limparState}>LIMPAR STATE</button>

        <button onClick={handleSearch}>CONSULTAR</button>
      </header>
    </div>
  );
}

export default Pesquisa;
