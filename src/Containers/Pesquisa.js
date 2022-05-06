import { Link } from "react-router-dom";
import { useState } from "react";


function Pesquisa() {

  const [cepNumber, setCepNumber] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <p>Qual CEP você deseja pesquisar?</p>
        <p>Estado atual: {cepNumber}</p>
        <input style={{ margin: 20 }} />
        <Link to="/Carregando">
          <button>CONSULTAR</button>
        </Link>
      </header>
    </div>
  );
}

export default Pesquisa;
