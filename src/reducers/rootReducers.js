import { combineReducers } from "redux";
import items from "./listReducer";

const rootReducer = combineReducers({ items });

export default rootReducer;
