// 5️⃣ Array Subsection 4 👉 Map and Reduce Method 

// Array.prototype.map() 🙋‍♂️

// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//     // return element for newArray, after executing something
//   }[, thisArg]);

// Returns a new array containing the results of calling a 
// function on every element in this array. 
// It return new array without mutating the orignal array 





// const array1 = [1, 4, 9, 16, 25];
// let newArr = array1.map((curElem,index,arr) => {
//     return curElem ;
// })
// console.log(array1);
// console.log(newArr);

// let newArrfor = array1.forEach((curElm, index, arr) => {
//   return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
// })
// console.log(newArrfor);




//  1: Find the square root of each element in an array?
//  2: Multiply each element by 2 and return only those 
//     elements which are greater than 10?


let arr=[2,3,4,6,8,9]

let result= arr.map((num)=>
num*2
).filter((e)=>e>10)
console.log(result)