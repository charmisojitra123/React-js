import React from 'react'
import Com_A from './Com_A'
import { createContext } from 'react'


/* React Props Drilling */

/* context api: createcontext , contextprovider  , contextconsumer */

export const data = createContext()
export const data1 = createContext()

const profile = {
    firstName : "Mitul",
    lastName : "Savaliya",
    age : 23
}

const Main = () => {
    return (
        <div>
            <data.Provider value={profile}>
                <Com_A>
                
                    
                </Com_A>
            </data.Provider>
        </div>
    )
}

export default Main