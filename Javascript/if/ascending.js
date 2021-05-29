let x = 13, y = 64 , z = 111 , ascd ,w;
if (x < y && x < z){
    w= x;
}  
else if (y < z){
        console.log("Ascending number is " , w, y, z,".");
        }
else{

        console.log("Ascending number is ", z ,y , w ,".");
    }


// ascd = (x < y) ? (y < z ? x : z) : (y < z ? y : z);

// console.log("Largest number among "
//     , x, ", ", y, " and "
//     , z, " is ", min, ".");