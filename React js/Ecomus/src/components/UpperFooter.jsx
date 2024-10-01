import React from 'react'
import { GrCube } from "react-icons/gr";
import { CiCreditCard1 } from "react-icons/ci";
import { IoMdReturnLeft } from "react-icons/io";
import { BiSupport } from "react-icons/bi";

const UpperFooter = () => {
  return (
    <div className='containerSection grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 bg-[#f5f5f5] py-10 xl:py-16'>
      <div className='flex items-center gap-5'>
        <div className='bg-white rounded-full p-5 border border-muted'>
            <GrCube className='text-3xl' />
        </div>
        <div>
            <h3 className='text-lg tracking-wide mb-2'>Free Shipping</h3>
            <p className='text-sm font-thin opacity-80 tracking-wide mt-2'>Free shipping over order $120</p>
        </div>
      </div>
      <div className='flex items-center gap-5'>
        <div className='bg-white rounded-full p-5 border border-muted'>
            <CiCreditCard1 className='text-3xl' />
        </div>
        <div>
            <h3 className='text-lg tracking-wide mb-2'>Flexible Payment</h3>
            <p className='text-sm font-thin opacity-80 tracking-wide mt-2'>Pay with Multiple Credit Cards</p>
        </div>
      </div>
      <div className='flex items-center gap-5'>
        <div className='bg-white rounded-full p-5 border border-muted'>
            <IoMdReturnLeft className='text-3xl' />
        </div>
        <div>
            <h3 className='text-lg tracking-wide mb-2'>
            14 Day Returns</h3>
            <p className='text-sm font-thin opacity-80 tracking-wide mt-2'>Within 30 days for an exchange</p>
        </div>
      </div>
      <div className='flex items-center gap-5'>
        <div className='bg-white rounded-full p-5 border border-muted'>
            <BiSupport className='text-3xl' />
        </div>
        <div>
            <h3 className='text-lg tracking-wide mb-2'>Premium Support</h3>
            <p className='text-sm font-thin opacity-80 tracking-wide mt-2'>Outstanding premium support</p>
        </div>
      </div>
    </div>
  )
}

export default UpperFooter
