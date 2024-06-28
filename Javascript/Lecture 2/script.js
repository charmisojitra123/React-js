/* Javascript Hoisting */

// var with Hoisting
var a, b, c;

var a;
var b;
var c;

a = 10; 
b = 20;
c = 30;

console.log(a);
console.log(b);
console.log(c);

// let With Hoisting
// let x, y, z;

let x;
let y;
let z;

x = 40;
y = 50; 
z = 60;

console.log(x);
console.log(y);
console.log(z);

// const With Hoisting
// const a, b, c; //Not Possible Hoisting
const m = 14;
console.log(m);

// Javascript Template Literals (back-tik ``)

let str = "Good Morning";

let string1 = "Hello Javascript";
console.log(string1);

let string2 = 'Hello Javascript';
console.log(string2);

let string3 = "Hello 'JAVASCRIPT'";
console.log(string3);

let string4 = 'Hello "JAVASCRIPT"';
console.log(string4);

let string5 = "Hello \"JAVASCRIPT\"";
console.log(string5);

let string6 = 'Hello \'JAVASCRIPT\'';
console.log(string6);

let str1 = `Hello World`;
console.log(str1);

let str2 = `Hello "World"`;
console.log(str2);

let str3 = `Hello 'World'`;
console.log(str3);
console.log(typeof str3);

let str4 = `Hello World, ${str}`;
console.log(str4);