import React from 'react'
import Transaction from './Transaction';
class Balance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currbalance: 0,
            updated: 0,
            date: "",
            arr: []
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
            arr: [...this.state.arr, this.state.date + "-" + this.state.updated + "- Added"]
        });
    };
    removeHandler = () => {
        this.setState({
            currbalance: (this.state.currbalance - this.state.updated),
            arr: [...this.state.arr, this.state.date + "-" + this.state.updated + "- Removed"]
        });
    };
    render() {

        return (

            <div className="container  md-12 bg-primary ">
                <div className="row">
                    <div className="col-md-6">
                        <div ><h1 >Account Statement - Basic</h1></div>
                        <div className="container ml-5 md-6  bg-success">
                            <div className="row">
                                <div className="col-md-8 ml-5 mt-2 mb-4">
                                    <div className="card">
                                        <div className="card-header">Balance:  {this.state.currbalance}</div>
                                        <div className="card-body">
                                            <input type="number" placeholder="Enter Amount to Add or Remove" onChange={this.changeHandler} />
                                            <br />
                                            <br />
                                            <button type="button" className="btn btn-success mr-2 btn-sm" onClick={this.addHandler}><h3>Add</h3></button>
                                            <button type="button" className="btn btn-primary btn-sm" onClick={this.removeHandler}><h3>Remove</h3></button>
                                        </div></div>
                                </div>
                            </div>
                        </div>
                        <Transaction statment={this.state.arr} check={this.state.currbalance}/>
                    </div>
                </div>
            </div>
        )
    }
};


export default Balance;
