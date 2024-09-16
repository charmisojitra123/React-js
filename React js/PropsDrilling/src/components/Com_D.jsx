import React from 'react'
import { data , data1 } from './Main'
import { useContext } from 'react'

const Com_D = () => {

    const profile = useContext(data)
    const age = useContext(data1)

    return (
        <div>
             <h1 className='heading'>This is Component D {profile.firstName}{profile.lastName}</h1>
             
            {/* {
                <data.Consumer>
                    {
                        (value) => {
                            return (
                                <>
                                    {
                                        <data1.Consumer>
                                            {
                                                (age) => {
                                                    return (
                                                        <>
                                                            <h1 className='heading'>This is Component D {value}{age}</h1>
                                                        </>
                                                    )
                                                }
                                            }
                                        </data1.Consumer>
                                    }
                                </>
                            )
                        }
                    }
                </data.Consumer>
            } */}
        </div>
    )
}

export default Com_D