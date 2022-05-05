import logo from "./logo.svg";
import "./App.css";
import Pesquisa from "./Containers/Pesquisa";
import Carregando from "./Containers/Carregando";
import Erro from "./Containers/Erro";
import Resultados from "./Containers/Resultados";

function App() {
  let numeroTela = 3;

    function handleClick(){
     numeroTela++ 

     console.log(`Numero da tela na função: ${numeroTela}`)
    }

  return <div>
      <button onClick={handleClick}>Próxima tela</button>
        {numeroTela == 0 ? <Pesquisa/> : null}
        {numeroTela == 1 ? <Resultados result={{"RUA": "São Paulo"}}/> : null}
        {numeroTela == 2 ? <Erro errorMessage="Não foi possível identificar o CEP!"/> : null}
        {numeroTela == 3 ? <Carregando/> : null}

      </div>
      
}

export default App;
