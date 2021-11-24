import React, { useState } from "react";
let Transaction = () => {
  let [balance, setBalance] = useState(0);
  let [value, setValue] = useState(Number);
  let [Transaction, setTransaction] = useState([]);

  let onChangeHandler = (event) => {
    isNaN(event.target.valueAsNumber)
      ? setValue(0)
      : setValue(event.target.valueAsNumber);
  };

  let addValueHandler = () => {
    value === 0 && value === null
      ? alert("Invalid Amount Entered")
      : setBalance(balance + value);
    value !== 0 && value !== null
      ? setTransaction([
          `${new Date().toLocaleString()} : ${value} :-   Added`,
          ...Transaction,
        ])
      : alert("Invalid Amount Entered.....");
  };

  let removeValueHandler = () => {
    value > balance || value === 0 || balance === 0
      ? balance > value || value === 0
        ? alert("Please Enter Valid Amount")
        : alert("CurrentBalance is Low")
      : setBalance(balance - value);

    if (value !== 0 && value < balance && value !== null) {
      setTransaction([
        `${new Date().toLocaleString()} : ${value} :-   Removed`,
        ...Transaction,
      ]);
    }
  };
  return (
    <div>
      <div className="container  md-12  align-items-center">
        <div className="row">
          <div className="col-md-5">
            <div>
              <h1>Account Statement - Basic</h1>
            </div>
            <div className="container md-6 mt-4  margin-left: auto margin-right: auto">
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header">
                      Current Balance: {balance}
                    </div>
                    <div className="card-body">
                      <input
                        id="value"
                        name="value"
                        type="number"
                        placeholder="Enter Amount"
                        onChange={onChangeHandler}
                      />
                      <br />
                      <br />
                      <button
                        type="button"
                        className="btn btn-success mr-2 btn-sm"
                        onClick={addValueHandler}
                      >
                        <h3>Add</h3>
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={removeValueHandler}
                      >
                        <h3>Remove</h3>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container md-6 mt-4  margin-left: auto margin-right: auto">
            <div className="row">
              <div className="col-md-5">
                <div className="card">
                  <div className="card-header">Transaction:</div>
                  <div className="card-body">
                    {
                      <ul>
                        {Transaction.map((trans) => {
                          return <li key={trans.Transaction}> {trans}</li>;
                        })}
                      </ul>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Transaction;
