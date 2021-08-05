import React from "react";

class Transaction extends React.Component{
render(){
    return (
        <div className="container-fluid md-5 ml-5 mt-4 mb-5 bg-dark " data-spy="scroll" data-offset="50">
        <div className="row">
          <div className="col-md-8 ml-5 mt-4 mb-4 ">
            <div className="card">
              <div className="card-header">Transaction:</div>
              <div className="card-body"  >
                <ul>
                {this.props.check ===0 ? null : 
                    <li>{this.props.statment.map((trans) => {
                  return <li key={trans.date}> {trans}</li>
                })}</li>}

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

    }


}export default Transaction;