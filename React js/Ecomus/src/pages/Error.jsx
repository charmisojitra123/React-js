import React from 'react'
import { FaHome } from "react-icons/fa";
import { PiSmileySadBold } from "react-icons/pi";
import { NavLink} from 'react-router-dom';


const Error = () => {
  return (
    <div className='text-center flex flex-col justify-center h-[90vh] m-auto'>
       <div>
        <h1 className='flex items-center justify-center text-8xl font-bold'>S<PiSmileySadBold />RRY</h1>
       </div>
       <p className='text-3xl my-10'>We Couldn't Find This Page !!!</p>
       <button className="btn btnDark mx-auto"><NavLink to="/">Back To Home</NavLink><FaHome className="ms-2" /></button>
    </div>
  )
}

export default Error
