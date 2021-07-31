import React from "react";

  class Transaction extends React.Component {
  state = {
    date: ""
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var date = new Date().toDateString();
    this.setState({ date });
  };

  render() {
    const { date } = this.state;

    return <div className="container mt-4 margin-left: auto margin-right: auto">
    <div className="row">
      <div className="col-md-5">
        <div className="card">
          <div className="card-header">Transaction</div>
          <div className="card-body">{date }</div>
        </div>
      </div>
    </div>
  </div>;
  }
}

export default Transaction ;