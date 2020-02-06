import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Footer extends Component {
  render() {
    const footerstyle = {
      // flex: "auto",
      // display: "flex",
       color: "#ccc",
      // //   // margin: "1em",
      // // bottompadding: "75px",
      // position: "fixed",
      // bottom: "0",
       width: "100%",
      // //paddingtop:"80px",
      margintop: "-100px",
       clear: "both",

      // //   //bordertop: "1px solid blue",
      // //   justifycontent: " center"
      // //   //verticalalign:"bottom",
      // // bordertop: "80px solid #15893d",
       textalign: " center",
      // // display:"inline-block",
       height: "100px",
       position: "fixed",
      //background:" #0c0c0c",
      // lineheight:" 80px",
       display: "grid",
       //gridtemplaterows: "auto 1fr auto",
    //  gridtemplatecolumns: "100%"
    };

    // const MenuMarginStyle = {
    //   margin: "auto"
    // };
    // const box = {
    //   margin: "0 8%",
    //   padding: 0,
    //   padding: "0px 400px"
    // };
    return (
      <div id = "footer">
        <footer
          className="page-footer font-small blue"
          style={footerstyle}
          fixedfooter
        >
          <div className="container text-center text-md-left">
            <div className="row">
              <div className="col-md-4 mx-auto">
                <h5 className="fontweightbold text-uppercase mt-3 mb-4">
                  Product(T&C)
                </h5>
                <p>Content of Product Terms and Conditions</p>
              </div>
              <div className="col-md-4 mx-auto">
                <h5 className="fontweightbold text-uppercase mt-3 mb-4">
                  Contact
                </h5>
                <p>Contacts of the Company</p>
                <a className="nav-link" href="/footercontact/link1">
                  link1
                </a>
                <a className="nav-link" href="/footercontact/link2">
                  link2
                </a>
              </div>
              <div className="col-md-4 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
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
