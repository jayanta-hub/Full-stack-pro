import axios from "axios";
import React, { Component } from "react";
class ContactApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: []
        };
    };
    componentDidMount() {
        let dataUrl = "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
        axios.get(dataUrl)
            .then((response) => {
                this.setState({ contact: response.data })
            })
            .catch((error) => {
                return error;
            })
    };
    render() {
        return (
            <React.Fragment>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-8">
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr className="text-center">
                                        <th>Picture</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>City</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {this.state.contact.length > 0 ? (
                                        <React.Fragment>
                                            {this.state.contact.map((contacts) => {
                                                return (
                                                    <tr key={contacts.email}>
                                                        <td><img src={contacts.picture.thumbnail} alt="vds" /></td>
                                                        <td>{contacts.name.first}</td>
                                                        <td>{contacts.email}</td>
                                                        <td>{contacts.location.city}</td>
                                                    </tr>
                                                );
                                            })}
                                        </React.Fragment>
                                    ) : null}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-4">
                            {this.state.contact.length > 0 ? (
                  <React.Fragment>
                    {this.state.contact.map((contacts) => {
                      return (
                        <tr key={contacts.email}>
                          <td>{contacts.name.first}</td>
                          <td>{contacts.email}</td>
                          <td>{contacts.location.city}</td>
                        </tr>
                      );
                    })}
                  </React.Fragment>
                ) : null}
                        </div>
                    </div>
                </div>
                {/*  <pre>{JSON.stringify(this.state.selectedContact)}</pre> */}
            </React.Fragment>
        )
    }
};
export default ContactApp;