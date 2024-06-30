/* Arthimetic Operators & Assignment Operators */
// Addition
{
  let x = 9;
  let y = 5;
  let z = x + y;
  console.log(z);
}

// Subtraction
{
  let x = -20;
  let y = 20;
  x += y;
  let z = 20 + (x - y);
  x -= y - z;
  console.log(z);
  console.log(x);
}

// Multiplication
{
    let x = 5;
    let y = 4;
    let z = x * y;
    y *= x;
    console.log(z);
}

// Division
{
    let x = 5;
    let y = 5;
    let z = x / y;
    z /= (x += y);
    z * x + y;
    console.log(z);
    console.log(x);
}

// Modulus
{
    let x = 10;
    let y = 2;
    let z1 = x % y;
    let z2 = y % x;
    x %= y;
    console.log(z1);
    console.log(z2);
}

// Exponentiation
{
    let x = 2;
    let y = 5;
    let z = x ** y; //2x2x2x2x2
    console.log(z);
    console.log(x);
}


/* Comparision Operators */
// Equal
{
    let x = 'Hello';
    let y = 'Javascript'
    x += y;
    console.log(x);
}

// Equal To & Not Equal To
{
    let x = 20;
    let y = '20';
    let z1 = x == y;
    let z2 = x != y;
    console.log(z1);
    console.log(z2);
}

// Strict Equality Operator & Not Strict Equality Operator
{
    let x = '10';
    let y = '20';
    let z1 = x === y;   
    let z2 = x !== y;
    console.log(z1);
    console.log(z2);
}

// Less than or Equal to
{
    let x = 10;
    let y = 10;
    let z1 = x < y;
    let z2 = !(x <= y);
    console.log(z1);
    console.log(z2);
}

// Greater than or Equal to
{
    let x = 20;
    let y = '20';
    let z1 = x > y;
    let z2 = x >= y;
    console.log(z1);
    console.log(z2);
}


