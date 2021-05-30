let x = 121;
let y = 64;
let z = 611
let min;
// if (x < y && x < z){
//     console.log("Least number among ", x, ", ", y, " and ", z, " is ", x, ".");
// }  
// else if (y < z){
//         console.log("Least number among " , x, ", ", y, " and " , z, " is ", y, ".");
//         }
// else{

//         console.log("Least number among ", x, ", ", y, " and " , z, " is ", z, ".");
//     }


min = (x < y) ? (y < z ? x : z) : (y < z ? y : z);

console.log("Largest number among "
    , x, ", ", y, " and "
    , z, " is ", min, ".");