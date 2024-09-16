import React from 'react'

export function Product({name , inStock}){ 
  if(inStock){
    return <li>✅ {name} is in stock</li>
  }
  else{
    return <li>❌ <del>{name}</del> is out of stock</li>
  }
}

const Conditional = () => {
  return (
    <div>
      <ul>
        <Product name="Tea" inStock={false}/>
        <Product name="Coffee" inStock={true}/>
        <Product name="Juice" inStock={false}/>
        <Product name="Shakes" inStock={true}/>
        <Product name="Water" inStock={true}/>
      </ul>
    </div>
  )
}

export default Conditional
