import React from "react";
import "./App.css";
//import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Main from "./Components/main";
function App() {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
