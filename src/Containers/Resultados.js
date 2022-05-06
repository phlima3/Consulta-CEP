function Resultados(props) {
  const result = props.result;

  const keys = Object.keys(result);
  const elements = keys.map((key) => (
    <span key={key}>
      <b>{key}: </b>
      {result[key]}{" "}
    </span>
  ));
  return (
    <>
      <p>Resultados para o CEP 16075-420</p>
      {elements}
      <button>NOVA CONSULTA</button>
    </>
  );
}

export default Resultados;
