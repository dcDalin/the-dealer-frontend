import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

const App = props => {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
      </div>
    </ConnectedRouter>
  );
};

export default App;
