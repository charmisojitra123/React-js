import React from 'react'
import { useEffect , useState } from 'react'

const UseEffect = () => {

    const [count , setCount] = useState(0)

    useEffect(() => {
        console.log("This is a useEffect React Hook")
    } , [count])

  return (
    <div className='text-center'>
      <p className='text-2xl font-semibold m-4'>Count : {count}</p>
      <button className='bg-purple-600 text-white rounded px-4 py-2' onClick={() => setCount(count + 1)}>Click Me!!!</button>
    </div>
  )
}

export default UseEffect
