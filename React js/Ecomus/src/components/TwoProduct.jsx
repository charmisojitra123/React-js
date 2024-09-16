import React from 'react'
import shopImg1 from '../assets/images/asset 36.jpeg'
import shopImg2 from '../assets/images/asset 37.jpeg'

const TwoProduct = () => {
  return (
    <div className='containerSection'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8'>
        <div className="relative rounded-xl twoProduct overflow-hidden">
            <img src={shopImg1} alt="AirMax Pro" className="twoProductImg z-0 h-full w-full rounded-md object-cover"/>
            <div className="absolute inset-0"></div>
            <div className="absolute bottom-4 w-full">
                <p className="mt-2 text-xs md:text-sm text-center">HOT ACCESSORIES</p>
                <h1 className="text-xl lg:text-3xl my-2 lg:my-4 font-semibold text-center">Smart Assistant</h1>
                <button className="btn btnLight mx-auto">Shop now</button>
            </div>
        </div>
        <div className="relative rounded-xl twoProduct overflow-hidden">
            <img src={shopImg2} alt="AirMax Pro" className="twoProductImg z-0 h-full w-full rounded-md object-cover"/>
            <div className="absolute inset-0"></div>
            <div className="absolute bottom-4 w-full">
                <p className="mt-2 text-xs md:text-sm text-center">FAST AND FREE SHIPPING</p>
                <h1 className="text-xl lg:text-3xl my-2 lg:my-4 font-semibold text-center">True Earbuds</h1>
                <button className="btn btnLight mx-auto">Shop now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TwoProduct
