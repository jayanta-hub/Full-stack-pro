import React, { Component }  from "react";
class Events extends Component {
    state = {
      msg:"Hello"
    };

changeHandler = (value) => {
    this.setState(
        {msg: value }
    )
};
render(){
    return (
        <div>
            <h2>Message : {this.state.msg}</h2>
            <pre>{JSON.stringify(this.state.msg)}</pre>
            <button className="btn btn-primary mr-2" onClick={this.changeHandler.bind(this,"Good Morning")}>GM</button>
            <button className="btn btn-secondary" onClick={this.changeHandler.bind(this,"Good Night")}>GN</button>
        </div>
    )
    }
};
export default Events;