import React, { useState } from "react";
import { Link, useNavigate   } from "react-router-dom";
import consultarCep from "cep-promise";

function numbersOnly(str) {
  return str.replace(/[^\d]/g, "");
}

function Pesquisa(props) {
  const setResult = props.setResult;
  const navigate = useNavigate();
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
  }
  function handleError(err) {
    const errorMessage = err.message;

    navigate('/Erro/' + errorMessage);
    
  }

  function handleSearch() {
    consultarCep(cepNumber).then(handleSuccsess).catch(handleError);
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

        <Link to="/Resultados">
          <button onClick={handleSearch}>CONSULTAR</button>
        </Link>
      </header>
    </div>
  );
}

export default Pesquisa;
