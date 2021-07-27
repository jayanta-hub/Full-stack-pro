import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Hooks/Component/about.jsx";
import Navbar from "./Hooks/NavBar/Navbar.jsx";
import ContactApp from "./Hooks/ContactApp/contactapp.jsx";
import DigitalClock from "./Hooks/DigitalClock/DigitalClock.jsx";
import Message from "./Message/message.jsx"
let App = () => {
  return (
    <>
      <Router>  
        <Navbar />
        <Switch>
          <Route exact path="/digital" component={DigitalClock} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={ContactApp} />
          <Route exact path="/message" component={Message} />
        </Switch>
      </Router>
    </>
  );
};

export default App;