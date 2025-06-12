import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen p-6'>
        <h1 className='text-3x1 font-bold mb-4 text-center'>E-Library</h1>
        {/* {Home} */}
      </div>
    </>
  )
}

export default App
