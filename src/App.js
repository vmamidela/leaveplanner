import React from "react";
import "./App.css";
//import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import { Route, Switch } from "react-router-dom";
import home from "./Components/home";
import {
  viewEmployee,
  myApprovals,
  addEmployee,
  myLeaves
} from "./Components/employee";

function App() {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/view" component={viewEmployee} />
        <Route path="/add" component={addEmployee} />
        <Route path="/leaves" component={myLeaves} />
        <Route path="/approvals" component={myApprovals} />
      </Switch>
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
