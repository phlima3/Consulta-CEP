import "./App.css";
import Pesquisa from "./Containers/Pesquisa";
import Carregando from "./Containers/Carregando";
import Erro from "./Containers/Erro";
import Resultados from "./Containers/Resultados";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [resultado, setResultado] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pesquisa setResultado={setResultado} />} />
        <Route path="/Carregando" element={<Carregando />} />
        <Route
          path="/Resultados"
          element={<Resultados result={{ RUA: "São Paulo" }} />}
        />
        <Route
          path="/Erro"
          element={<Erro errorMessage="Não foi possível identificar o CEP!" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
