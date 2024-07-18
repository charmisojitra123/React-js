// Map 

// let data = new Map();
// let data = new Map([
//     ['Hello', 100],
//     ['World', 200],
//     ['Good', 300],
//     ['Morning', 400],
// ])
// console.log(data);

// Size
// console.log(data.size);

// Set
// console.log(data.set('Bye',500));

// Get
// console.log(data.get('good'));
// console.log(data.get('Good'));
// console.log(data.get(200));

// Has
// console.log(data.has('Hello'));
// console.log(data.has('hello'));
// console.log(data.has(200));

// Delete
// console.log(data.delete('Good'));
// console.log(data.delete(200));
// console.log(data);

// Entries
// console.log(data.entries());

// For Each
// let txt = "";
// data.forEach((value,key) => {
//     txt += key + " :- " + value + "\n";
// })
// console.log(txt);



// Set
// let data = new Set();
// let data = new Set([1,2,3,4]);
// console.log(data);

// Add
// console.log(data.add("Hey..!!"));

// Size
// console.log(data.size);

// Values
// console.log(data.values());

// Entries
// console.log(data.entries());

// Delete
// console.log(data.delete(1));
// console.log(data);

// Clear
// console.log(data.clear());
// console.log(data);

// For Each
// let txt = "";
// data.forEach((value) => {
//     txt += value + "\n";
// })
// console.log(txt);



// Shallow Copy
// let data = [11 , 22 , 33 , 44 , 55];
// let abc = data;

// data.push(200);
// data.push(400);

// console.log(data);
// console.log(abc);



// Deep Copy// 
let data = [11 , 22 , 33 , 44 , 55];
let abc = [...data];

abc.push(200);
abc.push(400);

console.log(data);
console.log(abc);
