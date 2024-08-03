import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0);

  const iValue = () => {
    count = count + 1;
    if (count > 10) {
      count = 10;
    }
    setCount(count);
  }

  const dValue = () => {
    count--;
    if (count < 0) {
      count = 0;
    }
    setCount(count);
  }
  return (
    <>
      <h1>Primium Counter App</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={iValue}>Incriment</button>
      <br />
      <button onClick={dValue}>Decriment</button>
    </>
  )
}

export default App
