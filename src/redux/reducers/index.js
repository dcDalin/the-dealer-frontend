import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import firstOne from "./firstOne";

const rootReducer = combineReducers({
  router: routerReducer,
  firstOne
});

export default rootReducer;
