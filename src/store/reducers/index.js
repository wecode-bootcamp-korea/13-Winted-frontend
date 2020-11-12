import { combineReducers } from "redux";
import userFilterReducer from "./userFilterReducer";
import jobFetchReducer from "./jobFetchReducer";
import urlUpdateReducer from "./urlUpdateReducer";

export default combineReducers({
  userFilterReducer,
  jobFetchReducer,
  urlUpdateReducer
});
