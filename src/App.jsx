import { useState } from 'react';
import './index.css';
import Quiz from './Quiz';




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
