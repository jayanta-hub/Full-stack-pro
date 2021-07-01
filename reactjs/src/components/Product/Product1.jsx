import React from "react";
class Product extends React.Component {
  state =[
      "Dog_Name: German Shepherd",
      "Price:50000",
      
    ];
  change_product_name = () => {
    this.setState([
      ...this.state,[1]="Dog_Name: German"
    ]);
  };
  render() {
    return (
      <>
        <div className="container mt-6">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <pre>{JSON.stringify(this.state)}</pre>
                  <h4>Price:{this.state[1]}</h4>
                  <div className="card-body">
                    <h5>Dog Name: {this.state[0]}</h5>
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