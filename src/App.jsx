import { useState } from 'react'
import WelcomePage from './pages/WelcomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <WelcomePage/>
      
    </div>
  )
}

export default App
