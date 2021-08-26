import React from 'react';
class Form extends React.Component {
  state = { 
    Email: '',
    Password: '',
    isPasswordShown:false
  };
  tooglePasswordVisibility=()=>{

    const {isPasswordShown}=this.state;
    this.setState({isPasswordShown:!isPasswordShown});
  }

  formHandler = a => {

    this.setState({ [a.target.name]: a.target.value });
  };
  click=()=>{
    
      this.setState({})
      
    

  }
  button = q => {
    console.log(this.state);
    q.preventDefault();
  };

  render() {
    const {isPasswordShown}=this.state;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-Header">
                  <div className="card-Body">
                    <form onSubmit={this.button}>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter your Email"
                          name="Email"
                          onChange={this.formHandler}
                        />
                      </div>
                      <div className="form-group">
                     
                                   
                        <input
                          className="form-control"
                          type={(isPasswordShown)?"text":"password"}
                          placeholder="enter your password"
                          name="Password"
                          onChange={this.formHandler}/>
                          <i
                            className="fa fa-eye password-icon"  aria-hidden="true"
                            onClick={this.tooglePasswordVisibility}
                            />                         
                      </div>

                      <button type="submit" className="btn btn-success">
                        Login
                      </button>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Form;
