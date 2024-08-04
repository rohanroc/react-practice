import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componets/Card'
import Nice from './componets/Nice'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-blue-400'>Hello React</h1>
      <Card />
      <Card userName='Rahul' />
      <Card userName='Souradeep' />
      <Card userName='Anubhab' />
      <Nice />
    </>
  )
}

export default App
