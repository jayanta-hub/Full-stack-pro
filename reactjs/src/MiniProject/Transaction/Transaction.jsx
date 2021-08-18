import React, { useState } from 'react'

let Transaction = () => {
  let [balance, setBalance] = useState(0);
  let [value, setValue] = useState(Number);
  let [Transaction, setTransaction] = useState([]);

  let onChangeHandler = (event) => {
    setValue(event.target.valueAsNumber)
    event.preventDefault();
  }

  let addValue = () => {
    setBalance((value>=0 && value!==null)?(balance + value):(alert("Please Entered Amount")));
    setTransaction(
      (value !== 0 && value!==null ) ? [new Date().toLocaleString() + "   :    " + value + "    :-   Added", ...Transaction]
        : (alert("Invalid Amount Entered"), [...Transaction])

    )
  };

  let removeValue = () => {
    (balance < value && value===null) ? alert('CurrentBalance is Low') :
    (setBalance(balance - value)) 
    ( setTransaction((value !==0 && balance!==0)?[new Date().toLocaleString() + "    :    " + value + "    :-     removed", ...Transaction]
        : (alert("Invalid Amount Entered"), [...Transaction])))
        
  };
  return (
    <div>
      <pre>{JSON.stringify(Transaction)}</pre>
      <div className="container  md-12  align-items-center">
        <div className="row">
          <div className="col-md-5">
            <div><h1>Account Statement - Basic</h1></div>
            <div className="container md-6 mt-4  margin-left: auto margin-right: auto">
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header">Balance:  {balance}</div>
                    <div className="card-body">
                      <input type="number" placeholder="Enter Amount" onChange={onChangeHandler} required />
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
              <div className="col-md-5">
                <div className="card">
                  <div className="card-header">Transaction:</div>
                  <div className="card-body" >

                    {<ul>
                      {
                        Transaction.map((trans) => {
                          return <li key={trans.Transaction}> {trans}</li>
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
};
export default Transaction;