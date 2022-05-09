import React from 'react'
import { Link } from "react-router-dom";

function Erro(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>Erro na consulta</p>
        <p>{props.errorMessage}</p>
        <Link to="/">
          <button>VOLTAR</button>
        </Link>
      </header>
    </div>
  );
}

export default Erro;
