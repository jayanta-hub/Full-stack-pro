import React from 'react'

const FunctionB = (props) => {
    return (
        <div>
        <div className="container  mt-4  margin-left: auto margin-right: auto">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">Transaction:</div>
                    <div className="card-body" >
                    <button type="button" className="btn btn-primary btn-sm" onClick={props.add}><h3>Add</h3></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
};
export default FunctionB
