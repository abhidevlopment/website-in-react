import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarexample from "./components/layouts/Navbarexample";
import Footer from "./components/layouts/Footer";
//react router import
import { Switch, Route } from "react-router-dom";
//import pages
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Details from "./components/pages/Details";
import Contacts from "./components/pages/Contacts";
import NotFoundPage from "./components/pages/NotFoundPage";
function App() {
  return (
    <div className="App">
      <Navbarexample />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/news" component={News} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/details" component={Details} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
