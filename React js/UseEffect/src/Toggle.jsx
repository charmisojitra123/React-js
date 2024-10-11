import React from 'react'
import { useEffect } from 'react'

const Toggle = ({toggle , handleToggle}) => {

    useEffect(() => {
        console.log("This is a useEffect React Hook")
    } , [toggle])

  return (
    <div>
      <button className='bg-purple-600 text-white rounded px-4 py-2' onClick={handleToggle}>Toggle Me!!!</button>
      {
        toggle ? <div>This React Element</div> : null
      }
    </div>
  )
}

export default Toggle
