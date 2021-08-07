import React, {useState} from "react";
let Form =()=>{
    const [user,setUser]=useState({email:'',password:''})
    
  let  eventHandler=(event)=>{
    setUser({...user,[event.target.name]:event.target.value});
     
  }

  let loginHandler=(event)=>{
      event.preventDefault();

  }
    return(
        <>
            <h1>Login From</h1>
            <pre>{JSON.stringify(user)}</pre>
            <form onSubmit={loginHandler}>
            <label>Email :</label>
            <input type="text" name="email" onChange={eventHandler} />
            <br/>
            <label>password :</label>
            <input type="password" name="password" onChange={eventHandler} />
            <br/>
            <input type="submit" name="Login" value="Login"/>
            </form>
            </>
    )
};
export default Form;