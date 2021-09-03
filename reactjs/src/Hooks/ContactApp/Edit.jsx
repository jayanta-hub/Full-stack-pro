import React,{useState} from "react"

const Login = (props) => {
	let update=props.contact
	let[ data,setDate]= useState([{email:"",city:"",name:""}]);
	let[ data1,setDate1]= useState({});
	const updateHandler=(event)=>{
		setDate({...data,[event.target.name]:event.target.value})

};
const submitHandler=()=>{
	setDate1({...data,update})
	console.log({data1})
	console.log({data})

};
    return (
        <React.Fragment>
        <form>
        <div className="login-reg-panel">						
		<div className="white-panel">
			<div className="register-show">
			<div className="card-header">
            <div className="align-center">
			<pre>{JSON.stringify(data)}</pre>
			<pre>{JSON.stringify(update)}</pre>
			
              <img src={update.picture.large} alt="Test" />
            </div>
          </div>
          <div className="card-body">

				<input type="email" placeholder={update.email} name="email" onChange={updateHandler}></input>
				
				<br/>
				<br/>
				<input type="name" placeholder={update.name.first} name="name" onChange={updateHandler}></input>
				
				<br/>
				<br/>
				<input type="city" placeholder={update.location.city} name="city" onChange={updateHandler}></input>
				<br/>
				<br/>
				<input type="button" value="Submit" onClick={submitHandler} />
			</div>
			</div>
		</div>
	</div>
        </form>
        </React.Fragment>
    )
}
export default Login;