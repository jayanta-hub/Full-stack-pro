import React from "react"
import CompB from "./CompB"
function CompA(){
    let Emp_No=101;
    let Emp_Name="Garu"
    let Loc=["BBSR","JER","JSG"]
    let product_info={productName:"Iphone 5s", price:50000}
    return(
        <div>
            <h1>Employee No: {Emp_No}</h1>
            <h5>Employee Number: {Emp_Name}</h5>
            <h4>Employee Loc: {Loc[1]}</h4>
            <h3>Product Info: {product_info.price}</h3>
            <hr />
            <CompB one={Emp_No} two={Emp_Name} three={Loc[1]} four={product_info}/>
        </div>
    )
}
export default CompA;