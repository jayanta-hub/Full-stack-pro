import React from "react";
import {gmAction} from "../Redux/Message/message.action.js"
import {useDispatch} from "react-redux";
let Message = ()=>{
    let dispatch = useDispatch()
    let gmHandler=()=>{
        // dispatch an gmAction...
        dispatch(gmAction());
    }
    return<>
    <div className="container mt=4">
  <div className="row">
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">Message</div>
        <div className="card-body">
        <button className="mr-3" onClick= {gmHandler}>Good Morning</button>
        <button>Good Night</button>
        </div>
      </div>
    </div>
  </div>
</div>
</>
}
export default Message;