import React, { useState } from 'react'
import { useEffect } from 'react'

const Task = () => {
  const [data , setData] = useState([])
  const [value , setValue] = useState()

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(res => setData(res.recipes))
    .then(res => console.log(res));
  } , [])

  // console.log(value);

  return (
    <div className=''>

        <div className='text-center mt-10'>
            <h1 className='text-xl'>Enter the Receipe that you want to Search</h1>
            <input type="search" name="" id="" className='my-6 border border-1 border-black text-xl py-2 px-2' onChange={(e) => {setValue(e.target.value)}} /> 
            <br />
            <button className='btnDark'>Search</button>


      {/* Display Search Food Items */}
            <div className='mt-10 w-[90%] md:w-[50%] lg:w-[30%] mx-auto'> 
              {data.map((item) => {
                return <div className='w-fit' >
                  {item.name === value ? <div className="text-left">
                    <p className='font-bold text-xl mb-3'>{item.name}</p>
                    <img src={item.image} alt="" className='w-full object-contain'/>
                    <p className='my-4'><span className='font-bold'>Ingredients :-</span> {item.ingredients}</p>
                    <p className='my-4'><span className='font-bold'>Instructions :-</span> {item.instructions}</p>
                    <p className='my-4'><span className='font-bold'>Preperation Time Minutes :-</span> {item.prepTimeMinutes}</p>
                    <p className='my-4'><span className='font-bold'>Cook Time Minutes :-</span> {item.cookTimeMinutes}</p>
                    <p className='my-4'><span className='font-bold'>Cuisine :-</span> {item.cuisine}</p>
                    <p className='my-4'><span className='font-bold'>Calories :-</span> {item.caloriesPerServing}</p>
                  </div> : console.log("Search Not Found")} 
                </div>
            })}
            </div>
      
      
      {/* Display All Food Items */}
            <div className='mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'> 
              {data.map((item) => {
                return <div className='border border-gray-300 w-fit p-5 rounded overflow-hidden' >
                  <p className='font-bold text-xl mb-3'>{item.name}</p>
                  <img src={item.image} alt="" className='w-full object-contain'/> 
                </div>
            })}
            </div>
        </div>

    </div>
  )
}

export default Task
