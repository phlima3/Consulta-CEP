import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Pesquisa from "./Containers/Pesquisa";
import Carregando from "./Containers/Carregando";
import Erro from "./Containers/Erro";
import Resultados from "./Containers/Resultados";

function App() {
  const [result, setResult] = useState({});
  const [errorMessage] = useState("");
  const ticket = useRef(1);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Pesquisa setResult={setResult} ticket={ticket} />}
        />
        <Route path="/Resultados" element={<Resultados result={result} />} />
        <Route
          path="/Erro/:message"
          element={<Erro errorMessage={errorMessage} />}
        />
        <Route path="/Carregando" element={<Carregando ticket={ticket} />} />
      </Routes>
    </Router>
  );
}

export default App;
