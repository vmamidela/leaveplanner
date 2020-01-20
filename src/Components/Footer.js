import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Footer extends Component {
  render() {
    // const MenuMarginStyle = {
    //   margin: "auto"
    // };
    const box = {
      margin: "0 8%",
      padding: 0,
      padding: "0px 400px"
    };
    return (
      <div>
        <footer class="page-footer font-small blue fixed-bottom">
          <div class="container text-center text-md-left">
            <div class="row">
              <div class="col-md-4 mx-auto">
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">
                  Product(T&C)
                </h5>
                <p>Content of Product 
                  Terms and Conditions</p>
                        </div>
    
  {/* <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
  </div> */}

  
  </div>
  </div>

  {/* <!-- Copyright --> */}

          {/* <div class="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/">
              {" "}
              MDBootstrap.com
            </a>
          </div> */}
          
        </footer>
      </div>
    );
  }
}
export default Footer;
