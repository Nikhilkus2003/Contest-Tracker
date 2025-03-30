import { useState } from 'react'
import Contest from './Component/Contest/Contest'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contest/>
    </>
  )
}

export default App
