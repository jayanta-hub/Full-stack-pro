import React from "react";
import Axios from "axios";
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      error: "",
    };
  }
  componentDidMount() {
    let dataURL =
      "https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7";

    Axios.get(dataURL)
      .then((response) => {
        console.log("data",response.data)
        this.setState({
          menu: response.data,
        });
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
        console.log(err);
      });
      console.log(this.state.menu)
  }
  render() {
    return (
        <React.Fragment>
        <pre>{JSON.stringify(this.state.menu)}</pre>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <table class="table">
                <thead class="thead-dark">
                  <tr className="text-center">
                    <th>ID</th>
                    <th>Item</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {this.state.menu.length > 0 ? (
                    <React.Fragment>
                      {this.state.menu.map((contact) => {
                        return (
                          <tr key={contact.email}>
                            <td>{contact.id}</td>
                            <td>{contact.item_name}</td>
                            <td>{contact.price}</td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  ) : null}
                </tbody>
              </table>
            </div>
            <div className="col-md-4">
              {/* this.state.menu.length > 0 ? (
              <React.Fragment>
                {this.state.menu.map((contact) => {
                  return (
                    <tr key={contact.email}>
                      <td>{contact.id}</td>
                      <td>{contact.item_name}</td>
                      <td>{contact.price}</td>
                    </tr>
                  );
                })}
              </React.Fragment>
            ) : null */}
            </div>
          </div>
        </div>
        {/*  <pre>{JSON.stringify(this.state.selectedContact)}</pre> */}
      </React.Fragment>
    );
  }
}
export default Cart;
