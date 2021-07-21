import React from "react";
import Axios from "axios";
class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      error: "",
    };
  }
  componentDidMount() {
    let dataURL =
      "https://jsonplaceholder.typicode.com/posts";

    Axios.get(dataURL)
      .then((response) => {
        this.setState({
          contacts: response.data,
        });
        console.log(response);
        console.log(response.data);
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <h1>Contact App</h1>
        <pre>{JSON.stringify(this.state.contacts[0])}</pre>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-10">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.contacts.length > 0 ? (
                    <React.Fragment>
                      {this.state.contacts.map((contact) => {
                        return (
                          <tr key={this.contacts}>
                            <td>{contact.id}</td>
                            <td>{contact.title}</td>
                            <td>{contact.body}</td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ContactApp;