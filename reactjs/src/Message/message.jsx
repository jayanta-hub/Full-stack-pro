import React from 'react'
import {gmAction,gnAction} from '../Redux/Message/message.action.js'
import {useDispatch, useSelector} from 'react-redux'
let Message = ()=>{
  let dispatch = useDispatch()
  let gmHandler = ()=>{
    //dispactch an action
    dispatch(gmAction());
  }
  let gnHandler = ()=>{
    dispatch(gnAction())
  }
  let messageData = useSelector((state)=>{
    return state.message;
  })
    return <>
    <div className="container mt-4">
  <div className="row">
    <div className="col-md-6">
      <div className="card">
        <div className="card-header"><h4>Message:{messageData.message}</h4></div>
        <pre>{JSON.stringify(messageData)}</pre>
        <div className="card-body">
            <button type="button" className="btn btn-primary mr-3" onClick={gmHandler}>  Good Morning</button>
            <button type="button" className="btn btn-dark" onClick={gnHandler}> Good Night</button>
        </div>
      </div>
      
    </div>
  </div>
</div>

    </>
}
export default Message;