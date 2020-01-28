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

function App() {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <main role="main" className="container">
        <Switch>
          <Route exact path="/" component={Homefrm} />
          <Route path="/view" component={viewEmployee} />
          <Route path="/add" component={addEmployee} />
          <Route path="/leaves" component={myLeaves} />
          <Route path="/approvals" component={myApprovals} />
          <Route path="/employeEdit" component={Editfrm} />
        </Switch>
      </main>
      {/* const Footer = ({Footer}) => (<footer>{Footer}</footer>);
      <Footer /> */}
    </React.Fragment>
  );
}
export default App;
