import { useState } from "react";
import "./App.css";
import { Contador } from "./components/Contador";

function App() {
  const [count, setCount] = useState(0);

  function incrementarContador() {
    setCount(count + 1)
  }
  function decrementarContador() {
    setCount(count - 1)
  }
  function resetarContador() {
    setCount(0)
  }

  return (
    <div className="App">
      <Contador count={count} increment={incrementarContador} decrement={decrementarContador} reset={resetarContador} />
    </div>
  );
}

export default App;
