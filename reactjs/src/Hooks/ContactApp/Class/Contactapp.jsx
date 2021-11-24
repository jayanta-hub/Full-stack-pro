import React, { Component } from "react";
import Axios from "axios";
// import ContactCard from "../ContactCard/ContactCard";
import Edit from "../Edit";
import { TiEdit } from "react-icons/ti";

class ContactApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      selectedContact: {},
      selectedDetails: {},
      editContact: false,
    };
  }
  componentDidMount() {
    let dataUrl =
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
    Axios.get(dataUrl)
      .then((response) => {
        console.log("data",response.data)
        this.setState({
          contacts: response.data,
        });
      })
      .catch((err) => {});
  }
  getContactData = (contact) => {
    this.setState({
      selectedContact: contact,
    });
    this.setState({ editContact: !false });
  };
  editHandler = (arr) => {
    this.setState({ editContact: !false });
    this.setState({ selectedDetails: arr });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.contacts.length > 0 ? (
                    <React.Fragment>
                      {this.state.contacts.map((contact, index, arr) => {
                        return index <= 5 ? (
                          <tr
                            key={contact.email}
                            onMouseOver={this.getContactData.bind(this, contact)}
                          >
                            <td>
                              <img src={contact.picture.thumbnail} alt="Test" />
                            </td>
                            <td>{contact.name.first}</td>
                            <td>{contact.email}</td>
                            <td>{contact.location.city}</td>
                            <td>
                              <TiEdit onClick={this.editHandler.bind()} />
                            </td>
                          </tr>
                        ) : null;
                      })}
                    </React.Fragment>
                  ) : null}
                </tbody>
              </table>
            </div>

            <div className="col-md-4">
              {this.state.editContact ? (
                <Edit contact={this.state.selectedContact} />
              ) : null}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactApp;
