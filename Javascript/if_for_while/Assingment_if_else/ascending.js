let x = 111;
let y = 66;
let z = 333;
let l;
let m;
let s;
// if ((x > y) && (x > z)) {
//     l = x;
// }

// else {
//     if ((x < y) && (x > z) || (x > y) && (x < z)) {
//         m = x;
//     }

//     if ((x < z) && (x < z)) {
//         s = x;
//     }
// }
// if ((y > z) && (y > x)) {
//     l = y;
// }

// else {
//     if ((y < z) && (y > x) || (y > z) && (y < x)) {
//         m = y;
//     }

//     if ((y < z) && (y < x)) {
//         s = y;
//     }
// }
// if ((z > x) && (z > y)) {
//     l = z;
// }

// else {
//     if ((z < x) && (z > y) || (z > x) && (z < y)) {
//         m = z;
//     }

//     if ((z < x) && (z < y)) {
//         s = z;
//     }
// }

// console.log("Ascending number is ", s, m, l, ".");

((x > y) && (x>z)) ?  (((l=x) , (y > z))? ((m=y),(s=z)) : ((m=z),(s=y))) : 

( ((y > z) && (y>x)) ? ((( (l=y) , (z> x))? ((m=z),(s=x)):((m=x),(s=z)))) :

((z > x) && (z>y)) ?  ( ((l=z) , (x > y))? ((m=x),(s=y)) : ((m=y),(s=x))):(console.log("Can not find")));

console.log("Ascending number is ", s, m, l, ".");