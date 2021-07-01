import React from "react";
class Product extends React.Component {
  state = {
    product: {
      Dog_Name: "German Shepherd",
      Price:50000
    }
  };
  change_product_name = () => {
    this.setState({product: { Dog_Name: "German" , Price:"50000"}});
  };
  render() {
    return (
      <>
        <div className="container mt-6">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <pre>{JSON.stringify(this.state.product)}</pre>
                  <h4>Price:{this.state.product.Price}</h4>
                  <div className="card-body">
                    <h5>Dog Name: {this.state.product.Dog_Name}</h5>
                    <button
                      className="btn btn-primary"
                      onClick={this.change_product_name}
                    >
                      Click me to update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Product;