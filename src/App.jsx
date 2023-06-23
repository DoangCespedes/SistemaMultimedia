import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import swal from 'sweetalert'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [result, setResult] = useState(0)
  const [resultFalse, setResultFalse] = useState(0)
  const [resultFalse2, setResultFalse2] = useState(0)

const suma = () => {
  setResult(count + count2),
  setResultFalse(count + count2 + 3),
  setResultFalse2(count + count2 -3)
}

const reset = () => {
  setResult(0),
  setResultFalse(0),
  setResultFalse2(0)
  setCount(0)
  setCount2(0)
}

const alert = () => {
  swal("Su resultado fue correcto")
}
const alertFalse = () => {
  swal("Su resultado fue incorrecto")
}


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <h1>Sistema Multimedia</h1>
      </div>
      <h2>count is {count}</h2>
      <h2>count is {count2}</h2>
      <button className="btn" onClick={alert}>{result}</button>
      <button className="btn" onClick={alertFalse}>{resultFalse}</button>
      <button className="btn" onClick={alertFalse}>{resultFalse2}</button>
      <div className="card">
        <button className="btn2" onClick={() => setCount((count) => count + 1)}>
          Cambia la primera cifra 
        </button>
        <button className="btn2" onClick={() => setCount2((count2) => count2 + 2)}>
          Cambia la segunda cifra
        </button>
        <button className="btn2" onClick={suma}>
          Sumar
        </button>
        <button className="btn2" onClick={reset}>
          Reset
        </button>
        
      </div>
      <p className="read-the-docs">
        Sistema multimedia Richard Sanchez todos lod derechos reservados
      </p>
    </div>
  )
}

export default App
