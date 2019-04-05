import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./src/reducers/index";
// import thunk from "redux-thunk";

const initialState = {};

// const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
