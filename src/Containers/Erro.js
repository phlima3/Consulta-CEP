function Erro(props) {
  const navegarPara = props.navegarPara;
  return (
    <>
      <p>Erro na consulta</p>
      <p>{props.errorMessage}</p>
      <button onClick={() => navegarPara("PESQUISA")}>VOLTAR</button>
    </>
  );
}

export default Erro;
