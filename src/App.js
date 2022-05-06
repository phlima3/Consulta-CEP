import "./App.css";
import Pesquisa from "./Containers/Pesquisa";
import Carregando from "./Containers/Carregando";
import Erro from "./Containers/Erro";
import Resultados from "./Containers/Resultados";
import { useState } from "react";

function App() {
  const [nomeTela, setNomeTela] = useState("PESQUISA");

  function goTo(nomeTela) {
    setNomeTela(nomeTela);
  }

  return (
    <div>
      <div className="App">
        <header className="App-header">
          {nomeTela == "PESQUISA" ? <Pesquisa navegarPara={goTo} /> : null}
          {nomeTela == "RESULTADOS" ? (
            <Resultados result={{ RUA: "São Paulo" }} />
          ) : null}
          {nomeTela == "ERRO" ? (
            <Erro navegarPara={goTo} errorMessage="Não foi possível identificar o CEP!" />
          ) : null}
          {nomeTela == "CARREGANDO" ? <Carregando navegarPara={goTo} /> : null}
        </header>
      </div>
    </div>
  );
}

export default App;
