import React, { useState } from 'react'
import productData from '../../assets/ProductData/ProductData'

const Product = () => {
    let Data = productData

    let [qty, setQty] = useState(1)
    let [newArr, setNewArr] = useState()
    let [price, setPrice] = useState(Data[0].price)

    let addHandler = (id) => {
        let newArr =Data.filter((arr)=>{
            return(
            console.log(arr)
            )
            
        })
        console.log(newArr)
        setQty(qty += 1 )
        setPrice(Data[0].price*qty)

    };
    let removeHandler = (id) => {
        setQty(qty = qty - 1 )
        setPrice(Data[0].price*qty)
    };
    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">QYT</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
            </table>

            <table className="table">
                <tbody>
                    <React.Fragment>
                        {Data.map((contact) => {
                            return (
                                <tr key={contact.id}>
                                    <td>{contact.id}</td>

                                    <td><img src={contact.image} alt="vds" height="50px" width="50px" /></td>
                                    <td>{contact.title}</td>
                                    <td>
                                    <button className="btn btn-success btn-sm"  onClick={()=>{
                                        removeHandler(contact.id)
                                    }}>-</button>
                                        {qty}
                                    <button className="btn btn-success btn-sm"  onClick={addHandler}>+</button>
        
                                    </td>
                                    <td>{price}</td>
                                </tr>
                            );
                        })}
                    </React.Fragment>
                </tbody>
            </table>
        </div>
    )
}

export default Product
