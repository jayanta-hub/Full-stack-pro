import React, { useState } from 'react'

let App = () => {
    const [balance, setBalance] = useState(550);
    const [value, setValue] = useState(Number);
    const [Transaction, setTransaction] = useState([]);

    const onChangeHandler = (event) => {
        setValue(event.target.value)
        event.preventDefault();
    }

    const addValue = () => {
        setBalance(`${parseInt(balance) + parseInt(value)}`)
        
        setTransaction(Transaction => ([...Transaction, `${new Date().toLocaleTimeString()} ${value} add`]));
    }

    const removeValue = () => {
        setBalance(balance - value)
        setTransaction(Transaction => ([...Transaction, `${new Date().toLocaleTimeString()} ${value} remove`]));
    }
    return (
        <div>
{/* <pre>{JSON.stringify(balance)}</pre>

    <pre>{JSON.stringify(Transaction)}</pre> */}
    <h1>Balance : {balance}</h1>
            <input type="number" placeholder="Enter money to add or remove " onChange={onChangeHandler} ></input>
            <button type="button" onClick={addValue} >Add</button>
            <button type="button" onClick={removeValue}>Remove</button>
            <br></br>
            <div>
              <ul>
                 
                {
                  Transaction.map((trans)=>{
                    return <li> { trans}</li>
                  })
                }
               {/*  <h3>Transactions:{Transaction}</h3> */}
                </ul>
            </div>

        </div>
    )
}

export default App;