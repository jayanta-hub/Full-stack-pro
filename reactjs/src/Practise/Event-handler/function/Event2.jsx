import React, {useState} from "react";
let Event=()=>{
    let [message,setMessage]=useState("Hello")
    const changeHandler=(value)=>{
        setMessage(message=value)
    };
    return(
        <>
        <div>
        <h2>Message: {message}</h2>
        <pre>{JSON.stringify(message)}</pre>
        <button className='btn btn-success mr-2' onClick={changeHandler.bind("Good Moring")}>GM</button>
        <button className='btn btn-danger' onClick={changeHandler.bind("Good Night")}>GN</button>
        </div>
        </>
    )
};
export default Event;