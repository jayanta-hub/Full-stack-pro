import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Hooks/Component/about.jsx";
import Navbar from "./Hooks/NavBar/Navbar.jsx";
import ContactApp from "./Hooks/ContactApp/contactapp.jsx";
import DigitalClock from "./Hooks/DigitalClock/DigitalClock.jsx";
import Message from "./Message/message.jsx"
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import CovidData from "./Covid-details/CovidData.jsx"
let App = () => {
  return (
    <>
    <Provider store={store}>
      <Router>  
        <Navbar />
        <Switch>
          <Route exact path="/digital" component={DigitalClock} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={ContactApp} />
          <Route exact path="/message" component={Message} />
        </Switch>
      </Router>
      <CovidData/>
      </Provider>
    </>
  );
};

export default App;