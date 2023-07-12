import { useState } from 'react'
import './App.css'
import Section1 from './Section1'
import Section2 from './Section2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Section1/>
     <Section2/>

    </div>
  )
}

export default App
