import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userDataReducer from "../hoc/containers/UserData/reducer";
import AsyncStorage from "@react-native-community/async-storage";

const persistUserData = {
  key: "userDataReducer",
  storage: AsyncStorage,
  whitelist: ["userWeight"]
};

export default combineReducers({
  userData: persistReducer(persistUserData, userDataReducer)
});
