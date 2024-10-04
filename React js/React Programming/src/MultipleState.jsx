import React from 'react'
import { useState } from 'react';

const MultipleState = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    return (
        <div className='flex justify-center items-center mt-48 bg-lime-300 border-2 border-black mx-96'>
            <div className='m-3 p-5 '>
                <h1>Multiple State Variables</h1>

                <div className='flex flex-col items-center mt-5'>
                    <p className="text-lg mt-6 mb-1 font-semibold">Name: {name}</p>
                    <input
                        className='border-2 border-black rounded-md'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />

                    <p className="text-lg mt-6 mb-1 font-semibold">Age: {age}</p>
                    <input
                        className='border-2 border-black rounded-md'
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter your age"
                    />

                    <p className="text-lg mt-6 mb-1 font-semibold">Email: {email}</p>
                    <input
                        className='border-2 border-black rounded-md'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
            </div>

        </div>
    );
}

export default MultipleState
