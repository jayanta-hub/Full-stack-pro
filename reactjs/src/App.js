import "./assets/bootstrap.css"
// import Login from "./FormHandling/Login/Login.jsx"
import Registration from "./FormHandling/Registration/regi.jsx"
// import Singin from "./FormHandling/Singin/Singin.jsx"
import SalaryUI from "./Event-handling/SalaryUI"
import Signup from "./FormHandling/Singup/Singup"
import Employee from "./Render/employee"
function App() {
  return (
    <div >
      {/* <Login/> */}
      <Registration/>
      {/* <Singin/> */}
      <SalaryUI/>
      <Signup/>
      <Employee/>
    </div>
  );
}

export default App;
