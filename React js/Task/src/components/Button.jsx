import React from 'react'

function Button({method}) {
  return (
    <div className='flex justify-center mt-10'>
      <button onClick={method} className='text-white px-5 py-2 rounded bg-cyan-600'>
        Change Theme
      </button>
    </div>
  )
}

export default Button
