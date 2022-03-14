import { combineReducers } from "redux";
import common from "./commonReducers";

const rootReducer = combineReducers({
  common,
});

export default rootReducer;
