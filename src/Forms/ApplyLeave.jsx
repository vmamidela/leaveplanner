import React, { Component } from "react";
import Form from "react-bootstrap/Form";
//import "bootstrap/dist/css/bootstrap.css";
class Applyleave extends Component {
  constructor(props) {
    super(props);
    this.state = { fromdate: "",
  todate:"",reason:"" };
  }
  myChangeHandler = event => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <Form>
        <p>From Date:</p>
        <input type="text" onChange={this.myChangeHandler} />
        <p>To Date:</p>
        <input type="text" onChange={this.myChangeHandler} />
        <p>Reason:</p>
        <input type="text" onChange={this.myChangeHandler} /><br></br>
        <button variant="secondary">Submit</button>
      </Form>
    );
  }
}
export default Applyleave;
