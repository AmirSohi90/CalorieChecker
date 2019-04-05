import { combineReducers } from "redux";
import userDataReducer from "../hoc/containers/UserData/reducer";

export default combineReducers({
  userData: userDataReducer
});
