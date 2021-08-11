import React,{useState} from 'react'

const Profile = () => {
    let [message, setMessage]=useState("Hello")
    let [isLogin ,setIsLogin]=useState(true);
    let loginHandler=()=>{
setMessage("Wellcome to PSA")
setIsLogin(false)
    };
    let logoutHandler=()=>{

    setMessage("Thanks Visit again")
setIsLogin(true)
};
    return (
        <>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4>Message:{message}</h4>
                </div>
                <div className="card-body">
                  {isLogin ? (
                    <button
                      className="btn btn-success mr-4"
                      onClick={loginHandler}
                    >
                      Login
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning"
                      onClick={logoutHandler}
                    >
                      Logout
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Profile
