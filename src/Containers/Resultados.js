import React from "react";
import { Link } from "react-router-dom";
import CEPDados from "../Components/CEPDados";

function Resultados(props) {
  const result = props.result;

  return (
    <div className="App">
      <header className="App-header">
        <p>Resultados para o CEP {result.cep}</p>
        <CEPDados cepDados={result} />
        <Link to="/">
          <button style={{ margin: 20 }}>NOVA CONSULTA</button>
        </Link>
      </header>
    </div>
  );
}

export default Resultados;
