import React,{useState} from 'react'

const Showpassword = () => {
  let [inputType,setInputType]=useState('password')
  let changeHanlder=(event)=>{
    // console.log(event.target.checked);
    (event.target.checked === true )?
    setInputType(inputType='text')
  :
  setInputType(inputType='password')
  console.log(inputType);

  }
  return (
    <>
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Show Password</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                        onChange={changeHanlder}
                      />
                    </div>
                  </div>
                  <input
                    type={inputType}
                    className="form-control"
                    placeholder="Password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Showpassword
