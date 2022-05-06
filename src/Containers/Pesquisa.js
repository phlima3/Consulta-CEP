function Pesquisa(props) {
  const navegarPara = props.navegarPara;

  return (
    <>
      <p>Qual CEP você deseja pesquisar?</p>
      <input />
      <button onClick={() => navegarPara("ERRO")}>CONSULTAR</button>
    </>
  );
}

export default Pesquisa;
