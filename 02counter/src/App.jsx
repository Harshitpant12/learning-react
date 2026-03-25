import { useState } from 'react'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(75)
  // let counter = 15; first is var second is function or method to update the var

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React Course with Harshit {counter}</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>remove value</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
