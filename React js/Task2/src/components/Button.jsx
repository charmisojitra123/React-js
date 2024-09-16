import React, { useContext } from 'react'
import { changeMethod } from '../App'

function Button() {
  const method = useContext(changeMethod)
  return (
    <div className='flex justify-center mt-10'>
      <button type="button" className="text-white px-5 py-2 rounded bg-cyan-600" onClick={method}>
        Change Theme
      </button>
    </div>
  )
}

export default Button
