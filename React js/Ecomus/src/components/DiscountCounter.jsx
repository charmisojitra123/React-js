import React from 'react'
import img from '../assets/images/asset 38.jpeg'

const DiscountCounter = () => {
    
  return (
    <div className='containerSection discoutCounter grid grid-cols-1 lg:grid-cols-2 content-center overflow-hidden rounded-lg my-10'>
        <div className='discoutCounterImg'>
            <img src={img} alt="" className='rounded-t-lg lg:rounded-t-none lg:rounded-l-lg rounded-l-none h-full w-full object-cover' />
        </div>
        <div className='bg-[var(--primary-color)] flex'>
            <div className='self-center p-10 lg:p-16'>
                <p className='text-xs md:text-md font-semibold'>ULTIMATE APPLE ACCESSORY.</p>
                <h2 className='text-3xl lg:text-5xl font-medium my-5'>60% Discount</h2>
                <p className='text-xs md:text-base text-gray-600'>Find the latest and greatest gadgets to enhance your electronic devices.</p>
                <p className='font-light my-6'><span className='font-semibold'>Hungry up ! </span>Deals end in :</p>
                <button className='btn btnDark'>Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default DiscountCounter
