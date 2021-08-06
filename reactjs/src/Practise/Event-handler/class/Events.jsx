import React, { Component }  from "react";
class Events extends Component {
    state = {
      msg:"Hello"
    };

gmHandler = () => {
    this.setState(
        {msg: "Good Mroning" }
    )
};
gnHandler = () => {
    this.setState(
        { msg: "Good Night" }
    )
};
render(){
    return (
        <div>
            <h2>Message : {this.state.msg}</h2>
            <pre>{JSON.stringify(this.state.msg)}</pre>
            <button className="btn btn-primary mr-2" onClick={this.gmHandler}>GM</button>
            <button className="btn btn-secondary" onClick={this.gnHandler}>GN</button>
        </div>
    )
    }
};
export default Events;