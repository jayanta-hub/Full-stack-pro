let x = 121, y = 564 , z = 361 , max;
// if (x > y && x > z){
//     console.log("Greatest number  is :" , x);
// }  
// else if (y > z){
//         console.log("Greatest number is :" , y);
//         }
// else{

//         console.log("Greatest number is :" , z);
//     }


max = (x > y) ? (y > z ? x : z) : (y > z ? y : z);

console.log("Largest number among "
    , x, ", ", y, " and "
    , z, " is ", max, ".");

