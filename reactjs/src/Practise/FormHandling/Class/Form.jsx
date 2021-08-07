import React from "react";
class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:{userName:"", password:""}};
    };
     changeHandler=(event)=>{
        this.setState({
            user:{...this.state.user,
                [event.target.name]:event.target.value}})

    };
    submitHandler=(event)=>{
        event.preventDefault();
        alert(JSON.stringify(this.state))
    }
    render(){
        return(
            <>
            <h1>Login From</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
            <label>UserName :</label>
            <input type="text" name="userName" onChange={this.changeHandler}/>
            <br/>
            <label>password :</label>
            <input type="password" name="password" onChange={this.changeHandler}/>
            <br/>
            <input type="submit" name="Login" value="Login"/>
            </form>
            </>
        )
    };
};
export default Form;