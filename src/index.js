import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Container } from "semantic-ui-react";
import { store, history } from "./redux/store";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <Container>
      <App history={history} />
    </Container>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
