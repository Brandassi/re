import { useState } from "react"

export function App(){
const [numero1, setNumero1] = useState(0)
const [numero2, setNumero2] = useState(0)
const[resultado, setresultado] = useState(0)

function somar(e){
  e.preventDefault()
  setresultado(numero1 + numero2)
}

  <main>
    <form action="">
      <input type="number" placeholder="Numero 1" onChange={(e) => setNumero1(e.target.valueAsNumber) } />
      <input type="number" placeholder="Numero 2" onChange={(e) => setNumero2(e.target.valueAsNumber)  } />

      <button onClick={somar}>somar</button>

    </form>

    <p>resultado: {resultado}</p>
  </main>
}