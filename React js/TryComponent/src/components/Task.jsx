import React from 'react'
import { useState } from 'react'

export function Recepie() { 
 
  const [tea, setTea] = useState('0'); 
  const [coffee, setCoffee] = useState('0'); 
 
 
  const teaRecepie = () => { 
    const values = document.getElementById('guest').value 
    setTea(values) 
  } 
  const coffeeRecepie = () => { 
    const values = document.getElementById('guest').value 
    setCoffee(values) 
  } 
  return ( 
    <> 
      <div className='mt-12'> 
        <label htmlFor="guest" className='m-3'>Enter the number of Guest :- </label> 
        <input type="number" id='guest' className='border-2' placeholder='Number of guest' /> 
        <p className='m-3'>Guest Count :- {tea}</p>
          <div className='m-3'> 
            <h2 className='font-bold text-2xl text-fuchsia-800'>Tea Recepie</h2>
            <ol className='text-start'> 
              <li> {0.5 * tea} cups of water.</li> 
              <li> {tea} spoons of tea.</li> 
              <li> {0.5 * tea} spoons of spice.</li> 
              <li> {tea} cups of milk.</li> 
              <li> {tea} spoons of sugar.</li> 
            </ol> 
            <button className='bg-fuchsia-800 text-white py-3 px-6 rounded-lg m-3 ms-0' onClick={teaRecepie}>Recepie Of Tea</button>
          </div> 
 
          <div className='m-3'> 
            <h2 className='font-bold text-2xl text-fuchsia-800'>Coffee Recepie</h2> 
            <ol className='text-start'> 
              <li>Boil {coffee} cups of water.</li> 
              <li>Add {coffee} spoons of coffee and {0.5 * coffee} spoons of spice.</li> 
              <li>Add {0.5 * coffee} cups of milk to boil and sugar to taste.</li> 
            </ol> 
            <button className='bg-fuchsia-800 text-white py-3 px-6 rounded-lg m-3 ms-0' onClick={coffeeRecepie}>Recepie Of Coffee</button>  
          </div> 
        </div> 
    </> 
  ) 
} 
 
function Task() { 
 
  return ( 
    <> 
      <Recepie /> 
    </> 
  ) 
} 
 
export default Task
