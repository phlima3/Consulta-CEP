import React from 'react'
import { Link } from "react-router-dom";

function Resultados(props) {
  const result = props.result;

  const keys = Object.keys(result);
  const elements = keys.map((key) => (
    <span key={key}>
      <b>{key}: </b>
      {result[key]}{" "}
    </span>
  ));
  return (
    <div className="App">
      <header className="App-header">
        <p>Resultados para o CEP 16075-420</p>
        {elements}
        <Link to="/">
          <button style={{ margin: 20 }}>NOVA CONSULTA</button>
        </Link>
      </header>
    </div>
  );
}

export default Resultados;
