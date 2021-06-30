import React from "react";
class CA extends React.Component{
  render (){
      return<>
            <div className="card">
              <div className="card-header">
                <h4>Card Component</h4>
                <pre>{JSON.stringify(this.props)}</pre>
                <div className="card-body bg-warning">
                  <h5>Product Name: {this.props.one}</h5>
                  <h5>Product Price: {this.props.two}</h5>
                </div>
              </div>
            </div>
      </>
  }
}
export default CA;