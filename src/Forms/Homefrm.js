import React, { Component } from "react";
//import Form from "react-bootstrap/Form";
class Homefrm extends Component {
  render() {
    const stylesetting = { padding: "500*50" };
    return (
      <form>
        <div className="form-group" style={stylesetting}>
          <p className="float-left">Email address </p>
          <input
            type="text"
            className="form-control float-left"
            id="email"
            align="left"
            placeholder="Enter email"
          />
        </div>
        <div>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
      </form>
    );
  }
}
export default Homefrm;
