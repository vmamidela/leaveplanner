import React, { Component } from "react";
import Form from "react-bootstrap/Form";
class Applyleave extends Component {
  reander() {
    return (
      <Form>
        <Form.Row>
          {/* <Col> */}
            <Form.Control placeholder="First name" />
          {/* </Col> */}
          {/* <Col>
            <Form.Control placeholder="Last name" />
          </Col> */}
        </Form.Row>
      </Form>
      //   <Form>
      //     <Form.Group controlId="exampleForm.ControlInput1">
      //       <Form.Label>Email address</Form.Label>
      //       <Form.Control type="email" placeholder="name@example.com" />
      //     </Form.Group>
      //     <Form.Group controlId="exampleForm.ControlSelect1">
      //       <Form.Label>Example select</Form.Label>
      //       <Form.Control as="select">
      //         <option>1</option>
      //         <option>2</option>
      //         <option>3</option>
      //         <option>4</option>
      //         <option>5</option>
      //       </Form.Control>
      //     </Form.Group>
      //   </Form>
    );
  }
}
export default Applyleave;
