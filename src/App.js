import React from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home/index";
import About from "./components/About";
import Treatments from "./components/Treatments";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/treatments" component={Treatments} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
