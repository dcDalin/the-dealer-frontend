import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

// create history middleware
export const history = createHistory();

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// add middlewares to the list
const middleware = [routerMiddleware(history), sagaMiddleware];

const enhancers = composeWithDevTools(applyMiddleware(...middleware));

/**
 * CREATE STORE
 */
export const store = createStore(rootReducer, {}, enhancers);

// run the saga
sagaMiddleware.run(rootSaga);
