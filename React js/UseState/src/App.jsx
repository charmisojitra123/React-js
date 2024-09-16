import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState1 from './UseState1'
import UseState2 from './UseState2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseState1 /> */}
      <UseState2 />
     
    </>
  )
}

export default App
