import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { Segment } from "semantic-ui-react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Page404 from "./components/Page404";

const App = props => {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <div>
        <NavBar />

        <Segment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route component={Page404} />
          </Switch>
        </Segment>
      </div>
    </ConnectedRouter>
  );
};

export default App;
