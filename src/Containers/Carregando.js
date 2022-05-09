import React from 'react'
import { Link } from "react-router-dom";

function Carregando() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Carregando resultados...</p>
        <Link to="/">
          <button>CANCELAR</button>
        </Link>
      </header>
    </div>
  );
}

export default Carregando;
