import React from "react";
import CA from "./CA";
class CB extends React.Component {
  Product_Name = "Iphone";
  product_Price = 60000;
  Product_Details = {
    Product_Desc: "size-5''",
    Product_Usage: "Test",
  };
  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header">
                  <h4>Prudct Data</h4>
                  <div className="card-body bg-success">
                    <h5>Product Name: {this.Product_Name}</h5>
                    <h5>Product Price:{this.product_Price}</h5>
                    <h6>Description:{this.Product_Details.Product_Desc}</h6>
                    <h6>Usage:{this.Product_Details.Product_Usage}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <CA
                one={this.Product_Name}
                two={this.product_Price}
                three={this.Product_Details.Product_Desc}
                four={this.Product_Details.Product_Usage}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default CB;
