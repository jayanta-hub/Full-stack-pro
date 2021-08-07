import React, { Component,Fragment } from 'react'

 class Sms extends Component {
     constructor(){
         super();
     this.state={
         count:100
     }
    }
     inputHandler=(event)=>{
    this.setState({count:100-event.target.value.length})
     }
    render() {
        return (
            <Fragment>
            <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header bg-warning">
                  <h4>Sms Application</h4>
                  </div>
                  <div className="card-body">
                  <form>
                  <div className="form-group">
                  <textarea rows="4" maxLength="100" className="form-control"  onChange={this.inputHandler}></textarea>
                  </div>
                  <p className="h5">Remaining character :{this.state.count}</p>
                  </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </Fragment>
        )
    }
}

export default Sms
