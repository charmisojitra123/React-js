import React from 'react'
import { Link , useNavigate } from 'react-router-dom'

const RouterHook = () => {

    const navigate = useNavigate()

  return (
    <div className='text-center m-10'>
      <button onClick={() => navigate('/')} className='bg-fuchsia-900 text-white font-bold py-2 px-6 rounded-lg'>Back To Home 🏠</button>
    </div>
  )
}

export default RouterHook
