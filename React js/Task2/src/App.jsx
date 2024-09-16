import react, {createContext, useState } from 'react'

import Card from './components/Card';
import Button from './components/Button';

export const theme = createContext();
export const changeMethod = createContext()
function App() {
  
  const [bgColor,setColor] = useState()
  const[count,setCount] = useState(true)
 
  const toggle = ()=>{
    if(count === true){
      setColor('bg-black text-white')
      setCount(false)
    }
    else{
      setColor('bg-white')
      setCount(true)
    }
 }
  return (
    <>
    <theme.Provider value={bgColor}>
      <changeMethod.Provider value={toggle}>
        <Card />
        <Button/>
      </changeMethod.Provider>
    </theme.Provider>

    </>
  )
}

export default App;