import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import consultarCep from "cep-promise";

function numbersOnly(str) {
  return str.replace(/[^\d]/g, "");
}

function Pesquisa(props) {
  const setResultado = props.setResultado;
  const [cepNumber, setCepNumber] = useState("");
  function handleChange(event) {
    const value = event.target.value;
    setCepNumber(numbersOnly(value));
  }
  function limparState() {
    setCepNumber("");
  }
  function handleSuccsess(dadosCEP) {
      setResultado(dadosCEP)

  }
  function handleError(err) {}

  function handleSearch() {
    consultarCep(cepNumber).than(handleSuccsess).catch(handleError);
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
