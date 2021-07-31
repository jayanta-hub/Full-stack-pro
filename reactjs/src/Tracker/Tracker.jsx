import React from 'react'

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 100,
      updated: 0
    }

  }

  changHandler = (event) => {
    this.setState({
      updated: [event.target.value]

    });
    console.log(this.state.updated);
  };
  addHandler = () => {
    this.setState({
      balance: this.state.balance + this.state.updated
    });
  };
  removeHandler = () => {
    this.setState({
      balance: this.state.balance - this.state.updated

    });
  };
  render() {
    return (

      <div className="container mt-4 md-12 margin-left: auto margin-right: auto">
        <div className="row">
          <div className="col-md-5">
          <div><h1>Expense Tracker - Basic</h1></div>
            <div className="container md-6 mt-4  margin-left: auto margin-right: auto">
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header">Balance:</div>
                    <div className="card-body">
                    <label><h3 >Balance:{this.state.balance}</h3></label>
              <pre>{JSON.stringify(this.state.balance)}</pre>
              <pre>{JSON.stringify(this.state.updated)}</pre>

              <input type="text" placeholder="Enter Amount" onChange={this.changHandler}/>
              <br/>
              <button className="btn btn-success" onClick={this.addHandler}><h3>Add</h3></button>
              <br/>
              <button className="btn btn-primary" onClick={this.removeHandler}><h3>Remove</h3></button>
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
                  <div className="card-body"></div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    )
  }
}

export default Tracker;
