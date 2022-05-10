import React from "react";
import { Link, useParams } from "react-router-dom";

function Erro(props) {
  const params = useParams();
  console.log(params);
  return (
    <div className="App">
      <header className="App-header">
        <p>Erro na consulta</p>
        <p>{params.message}</p>

        <Link to="/">
          <button>VOLTAR</button>
        </Link>
      </header>
    </div>
  );
}

export default Erro;
