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
        
        setTransaction(
            Transaction => 
            ([...Transaction, `${new Date().toLocaleTimeString()} ${value} add`])
            );
    }

    const removeValue = () => {
        setBalance(balance - value)
        setTransaction(Transaction => ([...Transaction, `${new Date().toLocaleTimeString()} ${value} remove`]));
    }
    return (
        <div>
    <pre>{JSON.stringify(Transaction)}</pre> 
    <div className="container  md-12  align-items-center">
        <div className="row">
          <div className="col-md-5">
            <div><h1>Expense Tracker - Basic</h1></div>
            <div className="container md-6 mt-4  margin-left: auto margin-right: auto">
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header">Balance:  {balance}</div>
                    <div className="card-body">
                      <input type="number" placeholder="Enter Amount" onChange={onChangeHandler} />
                      <br />
                      <br />
                      <button type="button" className="btn btn-success mr-2 btn-sm" onClick={addValue}><h3>Add</h3></button>
                      <button type="button" className="btn btn-primary btn-sm" onClick={removeValue}><h3>Remove</h3></button>
                    </div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container md-6 mt-4  margin-left: auto margin-right: auto">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">Transaction:</div>
                  <div className="card-body" >

                    {<ul>
                     {
                  Transaction.map((trans)=>{
                    return <li key={trans.Transaction}> { trans}</li>
                  })
                }
              
                    </ul>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default App;