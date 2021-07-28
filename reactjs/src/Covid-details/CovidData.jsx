import React from 'react'
import Axios from 'axios';

class CovidData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [],
      errorMessage: null,
    }
  }
  componentDidMount() {
    // const EmpURL = "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
    const DataURL = "https://api.covid19india.org/data.json";
    Axios.get(DataURL)
      .then((response) => {
        this.setState({ contactList: response.data })
      })
      .catch((err) => {
        this.setState({ errorMessage: err })
      })
  }
  render() {
    return (
      <>
        <pre>{JSON.stringify(this.state.contactList)}</pre>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Image</th>
              <th scope="col">Employee Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
          {this.state.contactList.lenth > 0 ? (
            <React.Fragment>
                {this.state.contactList.map((covid) => {
                    return (

                       <tr key="covid.mail">
                           <td></td>
                       </tr>

                    )   
                })}
            </React.Fragment>
        ) : null}
          </tbody>
        </table>

      </>
    )
  }
}

export default CovidData;