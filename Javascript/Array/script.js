// Array

// let data = [];
// let data = new Array();


let data = [10 , 20 , 30 , 40 , 50];
// let data = ["Hello" , "World" , "Good" , "Morning"];
// let data = [10 , 20 , 30 ,  "Hello" , "World" , 40 , 50 , "Good" , "Morning"];


// let data = new Array(10 , 20 , 30 , 40 , 50);
// let data = new Array("Hello" , "World" , "Good" , "Morning");
// let data = new Array(10 , 20 , 30 , 40 , 50 , "Hello" , "World" , "Good" , "Morning");

console.log(data);


// data[2] = 3216;
// console.log(data[5]);


// Array is array or Not
// console.log(Array.isArray(data));


// Check the length of Array
// console.log(data.length);


// push ---> add data at the last index
// data.push(100);
// data.push(11 , 22 , 33 , 44);
// data.push(200);
// console.log(data);


// pop ---> remove data at the last index
// data.pop();
// data.pop();
// console.log(data);


// unshift ---> add data at the first index
// data.unshift(11 , 22 , 33);
// data.unshift(550);
// console.log(data);


// shift ---> remove data at the first index
// data.shift();
// data.shift();
// console.log(data);


// splice ---> splice(start , remove count , add data)
// data.splice(2 , 2);
// data.splice(2 , 2 , 111 ,222);
// data.splice(2 , 0 , 111 ,222);
// console.log(data);


// sort 
// data = ["mango" , "hey" , "Mango" , "Hello" , "Apple" , "orange"];
// data.sort();
// data = [60 , 22 , 10 , 50 , 30 , 111 , 40 , 20];
// console.log(data.sort((a,b) => a - b));
// console.log(data.sort((a,b) => b - a));


// slice 
// console.log(data.slice(1, 4));


// reverse ---> reverse the whole array
// console.log(data.reverse());


// concat ---> merge two array
// let arr = ["Hello" , 33 ,44 , 55 , "World"];
// console.log(data.concat(arr));
// console.log(arr.concat(data));


// includes ---> check the data is there in array or not
// console.log(data.includes("Mango"));
// console.log(data.includes(30));


// join ---> merge element of array
// console.log(data.join(" , "));
// console.log(data.join("     "));
// console.log(data.join(" and "));


// Min and Max
// const maxFun = (e) => {
//     return Math.max.apply(null , e)
// }
// console.log(maxFun(data));

const minFun = (e) => {
    return Math.min.apply(null , e)
}
console.log(minFun(data));