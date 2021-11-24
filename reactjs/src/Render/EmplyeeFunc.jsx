import React,{useState} from 'react'
import EmployeeData from "../assets/EmploeeData/EmployeeData";


const EmplyeeFunc = () => {
    const [emplyee,setEmplyee]=useState(EmployeeData);
    const [selected,setSelected]=useState({});
    const updateHander=(employee)=>{
        setSelected(employee)
        console.log(selected)
    }

    return (
        <React.Fragment>
        {/*  <pre>{JSON.stringify(this.state.employees[0])}</pre> */}
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-10">
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th>Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                  </tr>
                </thead>
                <tbody>
                  {emplyee.map((employee) => {
                    return (
                      <tr key={employee.email} onClick={()=>updateHander(employee)}>
                        <td>{employee.login.uuid.substring(32, 36)} </td>
                        <td>
                          <img src={employee.picture.thumbnail} alt="" />
                        </td>
                        <td>{employee.name.first} </td>
                        <td>{employee.location.city}</td>
                        <td>{employee.email}</td>
                        <td>{employee.dob.age}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <h1>{selected.id.value}</h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
}

export default EmplyeeFunc
