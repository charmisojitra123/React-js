import React, { useContext } from 'react'
import { theme } from '../App'

const Card = () => {
  const color=useContext(theme);
    return (
        <div className={`w-[300px] rounded-md border m-auto ${color}`}>
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Laptop"
            className="h-[200px] w-full rounded-md object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold">About Macbook</h1>
            <p className="mt-3 text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque provident animi non eaque vitae similique ipsa pariatur maiores esse.
            </p>
            <button
              type="button"
              className="mt-4 rounded-sm bg-green-600 w-full py-2 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Read
            </button>
          </div>
        </div>
      )
}

export default Card
