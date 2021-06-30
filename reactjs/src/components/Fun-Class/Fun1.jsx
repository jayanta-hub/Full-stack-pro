import React from "react"
import Class1 from "./Class1"
function Fun1(){
    let Emp_No=102;
    let Emp_Name="Jayanta"
    let Loc=["BBSR","JER","JSG"]
    let product_info={productName:"Iphone 10", price:100000}
    return(
        <div>
            <h1>Employee No: {Emp_No}</h1>
            <h5>Employee Number: {Emp_Name}</h5>
            <h4>Employee Loc: {Loc[1]}</h4>
            <h3>Product Info: {product_info.productName}</h3>
            <hr />
            <Class1 one={Emp_No} two={Emp_Name} three={Loc[1]} four={product_info}/>
        </div>
    )
}
export default Fun1;