import React from "react";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Route, Switch } from "react-router-dom";
import Editfrm from "./Forms/EditEmployee";
import Homefrm from "./Forms/Homefrm";
import {
  viewEmployee,
  myApprovals,
  addEmployee,
  myLeaves
} from "./Components/Employee";
//test

function App() {
  const mainstyle = { paddingbottom: "100px", overflow: "auto" };
  return (
    <React.Fragment>
      <div id="main">
        <Header />
        <NavBar />
        <div id="content">
          <main role="main" className="container" style={mainstyle}>
            <Switch>
              <Route exact path="/" component={Homefrm} />
              <Route path="/view" component={viewEmployee} />
              <Route path="/add" component={addEmployee} />
              <Route path="/leaves" component={myLeaves} />
              <Route path="/approvals" component={myApprovals} />
              <Route path="/employeEdit" component={Editfrm} />
            </Switch>
          </main>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default App;
