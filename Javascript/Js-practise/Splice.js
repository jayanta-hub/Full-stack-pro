// With the help of Splice() we can do CRUD operation in a Array
// It is return deleted item in a array formate ["",""]
//If we are not delete any item it will return empty array 


// *******Add items in an aaray*******


// const month =["jan","feb","march","april","may","june","july","aug"];

// let x=month.splice(month.length-5,0, "sep")
// console.log(month)

// console.log(x)
// out put of  console.log(x) is []



 //******* delete  the item **********


//  const month =["jan","feb","march","april","may","june","july","aug"];
 
//  let x=month.splice(month.length-5,2,)
//  console.log(month)

 //output ["jan","feb","march","june","july","aug"];


 //****** replace the item ******


const month =["jan","feb","march","april","may","june","july","aug"];
 
let y= month.indexOf("april")
console.log(y)
if(y !== -1){
month.splice(y,1, "April")

}
 console.log(month)

 //Output ["jan","feb","march","April","may","june","july","aug"]