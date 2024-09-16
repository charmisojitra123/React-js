import React from 'react'
import Com_D from './Com_D'

const Com_C = (props) => {
  return (
    <div>
      <h1 className='heading'>This is Component C {props.name}</h1>
      <Com_D />
    </div>
  )
}

export default Com_C
