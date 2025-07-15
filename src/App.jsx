import { useState } from 'react'
import './index.css'
import Quiz from './Components/quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <>
   <Quiz/>
    </>
    </div>
  )
}

export default App
