import { Link } from "react-router-dom";

function Pesquisa() {

  return (
    <div className="App">
      <header className="App-header">
        <p>Qual CEP você deseja pesquisar?</p>
        <input style={{ margin: 20 }} />
        <Link to="/Carregando">
          <button>CONSULTAR</button>
        </Link>
      </header>
    </div>
  );
}

export default Pesquisa;
