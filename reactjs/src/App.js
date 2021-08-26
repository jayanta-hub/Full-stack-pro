import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Hooks/Component/about.jsx";
import Navbar from "./Hooks/NavBar/Navbar.jsx";
import ContactApp from "./Hooks/ContactApp/Class/Contactapp.jsx";
import DigitalClock from "./Hooks/DigitalClock/DigitalClock.jsx";
import Message from "./Message/message.jsx"
// import Event2 from "./Practise/Binding/function/Event2.jsx"
// import Showpassword from "./Practise/Show-Password/Function/Showpassword.jsx";
import Transaction from "./MiniProject/Transaction/Transaction.jsx"
// import Form from "./Practise/Show-pass/Show.jsx"
import hook from "./Hooks/react-useref-hook/hook.jsx"
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
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
          <Route exact path="/hook" component={hook} />
        </Switch>
       <Transaction/>
      </Router>
      </Provider>
    </>
  );
};

export default App;