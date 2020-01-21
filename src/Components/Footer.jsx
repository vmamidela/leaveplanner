import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Footer extends Component {
  render() {
    // const MenuMarginStyle = {
    //   margin: "auto"
    // };
    // const box = {
    //   margin: "0 8%",
    //   padding: 0,
    //   padding: "0px 400px"
    // };
    return (
      <div>
        <footer class="page-footer font-small blue fixed-bottom">
          <div class="container text-center text-md-left">
            <div class="row">
              <div class="col-md-4 mx-auto">
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">
                  Product(T&C)
                </h5>
                <p>Content of Product Terms and Conditions</p>
              </div>
              <div class="col-md-4 mx-auto">
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">
                  Contact
                </h5>
                <p>Contacts of the Company</p>
                <a class="nav-link" href="/footercontact/link1">
                  link1
                </a>
                <a class="nav-link" href="/footercontact/link2">
                  link2
                </a>
              </div>
              <div class="col-md-4 mx-auto">
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">
                  AboutUs
                </h5>
                <p>Details of the company</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
