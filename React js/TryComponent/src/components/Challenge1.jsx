import React from 'react'

const Challenge1 = () => {
  return (
    <div>
        <div class="intro">
        <h1>Welcome to my website!</h1>
    </div>
    <p className="summary">
        You can find my thoughts here.
        <br></br>
        <b>And <i>pictures</i></b> of scientists!
    </p>
    </div>
  )
}


const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
export const Challenge2 = () => {
    return (
        <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    )
  }


//   const person = {
//     name: 'Gregorio Y. Zara',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     }
//   };
export const Challenge3 = () => {
    return (
        <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://cdn4.sharechat.com/img_687186_1654102d_1669397684162_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=162_sc.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
    )
  }


const baseUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKXkOT7Hvmr-oGkWRnFUh07McfxntlulFa1H7FONgD5T7QPCYvNVl6eAbOeb45PINi2o&usqp=CAU';
const person1 = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};
  export const Challenge4 = () => {
    return (
    <div style={person1.theme}>
      <h1>{person1.name}'s Todos</h1>
      <img
        className="avatar"
        src={baseUrl + person1.imageId + person1.imageSize + '.jpg'}
        alt={person1.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
    )
  }
  

export default Challenge1
