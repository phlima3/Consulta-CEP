function Erro(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>Erro na consulta</p>
        <p>{props.errorMessage}</p>
      </header>
    </div>
  )
}

export default Erro;
