import react, {createContext, useState } from 'react'
import Context from './components/Context';
import Card from './components/Card';
import Button from './components/Button';

const theme = createContext();
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
    <Context >
      <Card color={bgColor}/>
      <Button method={toggle}/>
    </Context>

    </>
  )
}

export default App;