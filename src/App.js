import logo from "./logo.svg";
import "./App.css";
import Pesquisa from "./Containers/Pesquisa";
import Carregando from "./Containers/Carregando";
import Erro from "./Containers/Erro";
import Resultados from "./Containers/Resultados";

function App() {
  return (
    <div>
      <Resultados
        result={{
          RUA: "Rua São Paulo",
          CIDADE: "Maringá",
          ESTADO: "PR",
        }}
      />{" "}
    </div>
  ); /* Pesquisa é um componente, que possuí valores dentro dela */
}

export default App;
