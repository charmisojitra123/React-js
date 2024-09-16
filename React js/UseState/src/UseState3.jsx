import React from 'react'
import { useState } from 'react'

const UseState3 = () => {

    const [count , setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }

  return (
    <div>
      <p className="font-bold mt-12">Count = {count}</p>
      <button className="bg-fuchsia-800 text-white py-2 px-6 m-3 font-bold rounded" onClick={increase}>Increment</button>
      <button className="bg-fuchsia-800 text-white py-2 px-6 m-3 font-bold rounded" onClick={decrease}>Decrement</button>
    </div>
  )
}

export default UseState3
