import React, {useState} from "react";
let Event=()=>{
    let [message,setMessage]=useState("Hello")
    const gmHandler=()=>{
        setMessage(message="Good Moring")
    };
    const gnHandler=()=>{
        setMessage(message="Good Night")
    };
    return(
        <>
        <div>
        <h2>Message: {message}</h2>
        <button className='btn btn-success mr-2' onClick={gmHandler}>GM</button>
        <button className='btn btn-danger' onClick={gnHandler}>GN</button>
        </div>
        </>
    )
};
export default Event;