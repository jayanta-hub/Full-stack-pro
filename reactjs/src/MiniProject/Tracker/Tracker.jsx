import React from 'react'

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currbalance: 0,
      updated: 0,
      date: "",
      arr:[]
    };
  };
  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var date = new Date().toDateString();
    this.setState({ date });
  };
  changeHandler = (event) => {
    this.setState({
      updated: event.target.valueAsNumber

    })
  };
  addHandler = () => {

    this.setState({
      currbalance: (this.state.currbalance + this.state.updated),
      arr: [...this.state.arr, this.state.date  + "-" + this.state.updated + "- Added"]
    });
  };
  removeHandler = () => {   
    this.setState({
      currbalance: (this.state.currbalance - this.state.updated),
      arr: [...this.state.arr, this.state.date  + "-" + this.state.updated + "- Removed"]
    });
  };
  render() {

    return (

      <div className="container  md-12  ">
        <div className="row">
          <div className="col-md-5">
            <div ><h1 >Expense Tracker - Basic</h1></div>
            <div className="container md-6  ">
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header">Balance:  {this.state.currbalance}</div>
                    <div className="card-body">
                      <input type="number" placeholder="Enter Amount" onChange={this.changeHandler} />
                      <br />
                      <br />
                      <button type="button" className="btn btn-success mr-2 btn-sm" onClick={this.addHandler}><h3>Add</h3></button>
                      <button type="button" className="btn btn-primary btn-sm" onClick={this.removeHandler}><h3>Remove</h3></button>
                    </div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container md-6 mt-5">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">Transaction:</div>
                  <div className="card-body" >
                    <ul>{this.state.currbalance === 0?null:<li>{this.state.arr.map((trans)=>{
                      return <li key={trans.date}> { trans}</li>
                    })}</li>}
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};


export default Tracker;
