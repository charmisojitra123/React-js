/* Miscellaneous Operators */
// Terananry Operator (? :)
{
    let age = 20;
    let result = age >= 18 ? "Adult" :  "Child";
    console.log(result);

}

// Comma (,)
{
    let x = (10 , 20 , 30);
    console.log(x); //It will consider last value

    a = 14;
    b = 27;
    c = 31;
    console.log(a);
    console.log(b);
    console.log(c);
}

// typeof
{
    let a = 20;
    let b = 10000n;
    let c = null;
    let d = 'Hello';
    let e = undefined;
    let f = null == undefined;
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof d);
    console.log(typeof e);
    console.log(typeof f);
}


/* Bitwise Operators */
// BitWise AND()
// When a bitwise AND is performed on a pair of bits, it return 1 if both bits are 1.
{
    let x = 1;
    let y = 0;
    console.log(x & y);
    console.log(y & x);
    console.log(x & x);
    console.log(y & y);
}

// BitWise OR()
// When a bitwise OR is performed on a pair of bits, it return 1 if one of the bits is 1.
{
    let x = 1;
    let y = 0;
    console.log(x | y);
    console.log(y | x);
    console.log(x | x);
    console.log(y | y);
}

// BitWise XOR()
// When a bitwise XOR is performed on a pair of bits, it return 1 if the bits are different.
{
    let x = 1;
    let y = 0;
    console.log(x ^ y);
    console.log(y ^ x);
    console.log(x ^ x);
    console.log(y ^ y);
}


/* Logical Operators */
// Logical AND
{
    let x = false;
    let y = true;
    let z1 = x & x;
    let z2 = y & y;
    let z3 = x & y;
    console.log(z1);
    console.log(z2);
    console.log(z3);
}

// Logical OR
{
    let x = false;
    let y = true;
    let z1 = x | x;
    let z2 = y | y;
    let z3 = x | y;
    console.log(z1);
    console.log(z2);
    console.log(z3);
}

// Logical NOT
{
    let x = true;
    let y = false;
    let z = !(y);

    let z1 = !(true && false) + (false && true);
    console.log(z1);
}
