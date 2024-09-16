import React from 'react'
import { useState } from 'react'

const UseState2 = () => {

    const [count, setCount] = useState(0)

    const increase = () => {
        console.log("You CLick on Increment Button");     
        setTimeout(() => setCount(count + 1) , 2000)
    }

    const decrease = () => {
        console.log("You CLick on Decrement Button");
        setTimeout(() => setCount(count - 1) , 2000)
    }

  return (
    <div className="text-center">
      <p className="font-bold mt-12">Count = {count}</p>
      <button className="bg-fuchsia-800 text-white py-2 px-6 m-3 font-bold rounded" onClick={increase}>Increment</button>
      <button className="bg-fuchsia-800 text-white py-2 px-6 m-3 font-bold rounded" onClick={decrease}>Decrement</button>
    </div>
  )
}

export default UseState2
