import React,{useState,Fragment} from 'react'

const Sms = () => {
    let[count,setCount]=useState("100");
   let inputHandler=(event)=>{
        setCount(count=100-event.target.value.length)
    }
    return (
        <Fragment>
        <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header bg-warning">
              <h4>Sms Application</h4>
              <pre>{JSON.stringify(count)}</pre>
              </div>
              <div className="card-body">
              <form>
              <div className="form-group">
              <textarea rows="4" maxLength="100" className="form-control"  onChange={inputHandler}></textarea>
              </div>
              <p className="h5">Remaining character :{count}</p>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        </Fragment>
    )
}

export default Sms;
