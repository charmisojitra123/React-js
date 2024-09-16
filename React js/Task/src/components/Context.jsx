import React from 'react'

const Context = ({fun,children,setMethod}) => {
  const handleClick = (e)=>{
    console.log(e);
  }
  return (
    <div>
      {children}
      <p onClick={handleClick}>{fun}</p>
    </div>
  )
}

export default Context
