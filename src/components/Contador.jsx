export const Contador = ({ count, increment, decrement, reset }) => {
  return (
    <div className="container">
      <div className="counter-card">
        <h1 className="title">Contador de Cliques</h1>
        <div className="counter-display">
          <span className="counter-value">{count}</span>
        </div>
        <div className="button-group">
          <button
            className="counter-btn btn-decrement"
            onClick={decrement}
            aria-label="Decrementar"
          >
            <span className="btn-icon">−</span>
          </button>
          <button
            className="counter-btn btn-reset"
            onClick={reset}
            aria-label="Resetar"
          >
            <span className="btn-text">Resetar</span>
          </button>
          <button
            className="counter-btn btn-increment"
            onClick={increment}
            aria-label="Incrementar"
          >
            <span className="btn-icon">+</span>
          </button>
        </div>
      </div>
    </div>
  )
}
