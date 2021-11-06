// 👉 Reduce Method

// flatten an array means to convert the 3d or 2d array into a
// single dimensional array

// The reduce() method executes a reducer function (that you provide)
// on each element of the array, resulting in single output value.

// The reducer function takes four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array

// 4 subj = 1sub= 7
// 3dubj = [5,6,2]

// let arr = [5,6,2];

// let sum = arr.reduce((accumulator, curElem) => {
//         debugger;
//       return accumulator += curElem;
// },7)
// console.log(sum);

// How to fatten an array
// converting 2d and 3d array into one dimensional array

// const arr = [
//         ['zone_1', 'zone_2'],
//         ['zone_3', 'zone_4'],
//         ['zone_5', 'zone_6'],
//         ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
//     ];

// // let flatArr = arr.reduce((accum, currVal)  => {
// //           return accum.concat(currVal);
// // })

// console.log(arr.flat(Infinity));

// console.log(flatArr);

const arr = [
  ["zone_1", "zone_2"],
  ["zone_3", ["zone_1", "zone_2", ["zone_1", "zone_2"]]],
];
console.log(arr.flat(3));
console.log(arr);
