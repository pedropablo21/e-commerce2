//rcc
import React, { Component } from "react";

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase text-capitalize pt-5">
            <h1 className="display-3">404</h1>
            <h1 className="font-weight-bold text-uppercase error-font">
              error
            </h1>
            <h2 className="font-weight-bold text-capitalize size-letter">
              page not found
            </h2>
            <h3 className="font-weight-bold text-capitalize size-letter"><br/>
              the requested URL
              <span className="text-danger font-weight-bold text-capitalize size-letter">
                {this.props.location.pathname}
              </span>{" "}
              was not found
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

//Quedó en el minuto 5:46:00
