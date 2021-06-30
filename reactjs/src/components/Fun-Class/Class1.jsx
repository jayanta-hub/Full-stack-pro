import React from "react";
class Class1 extends React.Component{
    render (props){
        return<>
        <h1>hello:</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <h4>Employee Name: {this.props.two}</h4>
        </>
    }
}
export default Class1;