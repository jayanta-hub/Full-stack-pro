let x = 121, y = 64 , z = 611 , min;
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