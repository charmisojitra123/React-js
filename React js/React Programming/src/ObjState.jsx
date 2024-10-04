import React from 'react'
import { useState } from 'react';

const ObjState = () => {

    const [user, setUser] = useState({
        name: "",
        age: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update the state using the spread operator
        setUser({
            ...user,
            [name]: value, // Dynamically update the property using computed property names
        });
    };


    return (
        <div className='flex flex-col items-center mx-96 mt-48 py-5 bg-green-200  border-2 border-black p-5'>
            <h1>Object State Example</h1>

            <p className="text-lg mt-6 mb-1 font-semibold">Name: {user.name}</p>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className='border-2 border-solid border-black'
            />

            <p className="text-lg mt-6 mb-1 font-semibold">Age: {user.age}</p>
            <input
                type="number"
                name="age"
                value={user.age}
                onChange={handleChange}
                placeholder="Enter your age"
                className='border-2 border-solid border-black'
            />

            <p className="text-lg mt-6 mb-1 font-semibold">Email: {user.email}</p>
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className='border-2 border-solid border-black'
            />

            <h2 className="text-lg mt-6 mb-1 font-semibold">User Information:</h2>
            <textarea name="" id="" className='border-2 border-black'></textarea>

        </div>
    );
}

export default ObjState
