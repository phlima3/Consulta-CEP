import "./App.css";
import Pesquisa from "./Containers/Pesquisa";
import Carregando from "./Containers/Carregando";
import Erro from "./Containers/Erro";
import Resultados from "./Containers/Resultados";
import { useState } from "react";

function App() {
  const [numeroTela, setNumeroTela] = useState(0);

  function handleClick() {
    setNumeroTela((numeroTela + 1) % 4);
  }

  return (
    <div className="App">
      <header className="App-header">
      <button onClick={handleClick}>Próxima tela</button>
      {numeroTela === 0 ? <Pesquisa /> : null}
      {numeroTela === 1 ? <Resultados result={{ RUA: "São Paulo" }} /> : null}
      {numeroTela === 2 ? (
        <Erro errorMessage="Não foi possível identificar o CEP!" />
      ) : null}
      {numeroTela === 3 ? <Carregando /> : null}
      </header>
    </div>
  );
}

export default App;
