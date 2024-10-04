import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


const MainBlog = ({ image , title}) => {
  return (
    <div className=''>
          <div className='relative rounded-lg overflow-hidden'>
            <img src={image} alt="" className='rounded-lg object-cover hover:scale-110 duration-1000' />
            <div className='absolute bottom-[18px] left-[18px] bg-white text-black font-bold text-xs h-8 flex px-4 rounded-sm'><button>ACCESSORIES</button></div>
          </div>
          <div className='flex flex-col gap-[15px] pt-[30px] '>
            <p className='text-xl font-normal duration-500 hover:text-red-600'>{title}</p>
            <p className='flex items-center gap-1 underline decoration-2 duration-500 hover:text-red-600'>Read more<GoArrowUpRight /></p>
          </div>
    </div>
  )
}

export default MainBlog
