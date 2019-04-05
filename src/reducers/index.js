import { combineReducers } from "redux";
import userDataReducer from "../hoc/containers/UserData/reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistUserData = {
  key: "userDataReducer",
  storage: storage,
  whitelist: ["userWeight"]
};

export default combineReducers({
  userData: persistReducer(persistUserData, userDataReducer)
});
