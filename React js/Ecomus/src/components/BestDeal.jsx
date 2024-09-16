import React from 'react'
import bestDeal from '../assets/images/asset 35.jpeg'

const BestDeal = () => {
  return (
    <div className='containerSection'>
      <div className='font-semibold rounded-xl object-cover bg-no-repeat bg-center py-8 md:py-12 lg:py-16 xl:py-52 px-4 md:px-8 lg:px-10 xl:px-16' style={{backgroundImage: `url(${bestDeal})`}}>
        <p className='text-white text-xs lg:text-sm'>SALE UP TO 30% OFF TODAY</p>
        <h1 className='text-white text-3xl lg:text-5xl my-1 md:my-3'>Best Deals Discounts</h1>
        <p className='text-white text-md lg:text-lg font-normal mt-3 lg:mt-5 mb-5 lg:mb-8'>Fast wireless charging on-the-go.</p>
        <button className='btnLight btn'>Shop Collection</button>
      </div>
    </div>
  )
}

export default BestDeal
