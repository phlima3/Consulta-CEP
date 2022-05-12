import React from "react";
import { Link } from "react-router-dom";

function Carregando(props) {
  const ticket = props.ticket;

  function handleCancel() {
    ticket.current++;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="loadingio-spinner-rolling-n64nzqszvaa">
          <div className="ldio-n63odfdng2">
            <div></div>
          </div>
        </div>
        <Link to="/">
          <button onClick={handleCancel}>CANCELAR</button>
        </Link>
      </header>
    </div>
  );
}

export default Carregando;
