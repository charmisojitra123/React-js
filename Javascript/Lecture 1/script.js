// Console Log
console.log("Helloo World !!");

// Console Warn
console.warn("Helloo Warningg !!");

// Document Write
document.write("Helloo HTML");

// DOM (Document Get By ID)
document.getElementById('demo').innerHTML = "Hello, Good Morning";

// Pop Up (Alert)
// alert("Hello, I am alert !!");

//ES5 var Variable (Global Variable)
{
    var x = 10;
    console.log(x);

    var y = 20;
    console.log(y);

    var z = 30;
    console.log(z);

    console.log(x + y + z);

    var x = 'skill';
    console.log(x);

    var y = 'qode';
    console.log(y);

    console.log(x + y);
}

//ES5 let Variable (Block Scope Variable)
{
    let x = 'skill';
    console.log(x);

    let y = 'qode';
    console.log(y);

    console.log(x + y);
}

//ES5 const Variable (Block Scope Variable)
{
    const x = 25;
    console.log(x);
}