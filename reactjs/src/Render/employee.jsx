import React, { Component } from "react";
import EmployeeData from "../assets/EmploeeData/EmployeeData";
class Employee extends Component {
  //initilize component data
  constructor(props) {
    super(props);
    this.state = {
      employees: EmployeeData,
      
    };
  };  
  updateHander =(emplyee)=>{
      console.log(emplyee)
  }
  render() {
    // let { employees } = this.state.employees;
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
                  {this.state.employees.map((employee) => {
                    return (
                      <tr key={employee.email} onMouseOver={this.updateHander.bind(this,employee)}>
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
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Employee;