import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";


import Contact from "./Contact";
import Appnew from './Appnew.jsx';
import About from "./About";


class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
          <Route path="/" exact={true} component={About} />
          <Route path="/Contact" exact={true} component={Contact} />
          <Route path="/Appnew" exact={true} component={Appnew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
