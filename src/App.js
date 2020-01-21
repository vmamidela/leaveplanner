import React from "react";
import "./App.css";
//import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import { Route, Switch } from "react-router-dom";
import home from "./Components/home";
import employee from "./Components/employee";

function App() {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/view" component={employee} />
        <Route path="/add" component={employee} />
        <Route path="/leaves" component={employee} />
        <Route path="/approvals" component={employee} />
      </Switch>
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
