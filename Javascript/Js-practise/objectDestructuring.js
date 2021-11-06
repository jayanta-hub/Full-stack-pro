const bioData={
    Fname:"jayanta",
    Lname:"Garu",
    Age:27,
    Email:"jayanta.garu@gamil.com",
    address:{
        city:"bbsr",
        state:"odisha"
    },
    "start-date":"20/54/2021"
}
//************Destructuring of object******************

let{Fname,Lname,Email,Age,address,}=bioData
console.log(Fname="gggg") // out put--- gggg
console.log(address) // out put-- { city: 'bbsr', state: 'odisha' }
console.log(address.city) // out put-- bbsr
console.log(address.state) // out put-- odisha


//***********************Dynamically we can read the value of key of an object*********************


bioData["Fname"]="jjjj"
console.log(bioData["Fname"]) // out put--- jjjj
console.log(bioData["start-date"]) // out put--- 20/54/2021

//************Destructuring of Array******************


// const bioData=["jayanta","Garu",27,"jayanta.garu@gmail.com"]

// let [name,,age,mail]=bioData // "name" variable store "jayanta" value
// console.log(age)
// console.log(mail)
