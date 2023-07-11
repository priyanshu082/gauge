import { useState } from 'react'
import './App.css'
import Section1 from './Section1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Section1/>
    </>
  )
}

export default App
