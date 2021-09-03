// var myName="Garu";
// var _myAge=null;
// var _my__Mail="jayanta.garu@gmail.com";
// console.log(typeof(myName));
// console.log(typeof(_myAge));
// console.log(typeof(_my__Mail));

// var x=10+"20";
// console.log(x);
// console.log(typeof(x));
// debugger;
//   if(x=0){
// console.log("jjfkkjk")
//   }else{
//     console.log("qqqqqqqqqqq")

//   };

// const arr=["Garu","Jayanta","Satya"]
// for(let elm in arr){
//   // console.log(arr)
//   console.log(elm)
// };
// for(let elme of arr){
//   // console.log(arr)
//   console.log(elme)
// }
// const arr=["Garu","Jayanta","Satya"]

// const index = arr.indexOf("Jayanta")
// if(index !==-1){
//   const upDate = arr.splice(index,1,"jayanta")
//   console.log(arr)
// } else{
//   console.log("no data")
// }

// const arr=["Garu","Jayanta","Satya"]
// let Date=arr.map((name,index,arr)=>{
//     return(
//          (index<=arr.length)?
//         console.log(name,arr):null
        
//     )
// }
// )

// var z;
// function add(q,w,e,r,t,y,u){
//     z=1;
//     return (z+q+w+e+r+t+y+u)
// };
// console.log(add(2,2,1,4,5,6,3))

// object LeastEnergyPair extends App {
    
//       private def getCountOfPair(array: Array[Int],sum: Int): mutable.Set[(Int, Int)] = {

//     val seen =  mutable.Set[Int]()
//     val out = mutable.Set[(Int,Int)]()

//     array map { x =>
//       val target = sum - x
//       if (seen.contains(target) || target*2 == sum)
//         out += ((Math.min(x,target),Math.max(x,target)))
//       else
//         seen += x
//     }
//     println(out)
//     out
//   }


//   private def sum(i:Int): Int = i.toString.toCharArray.map(_.asDigit).sum


//   def findLeastEnergyPair(a: mutable.Set[(Int,Int)]): (Int,Int) = {
//     var min = Int.MaxValue
//     var minPair = (0,0)
//     a.foreach {
//       case (i,j) =>
//         if (sum(i) + sum(j) < min) {
//           min = sum(i) + sum(j)
//           minPair = (i,j)
//           println(s"$min ----- $minPair")
//       }
//     }
//     minPair
//   }

//   println(findLeastEnergyPair(getCountOfPair((1 to 10000).toArray, 10000)))
// }