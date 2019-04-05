import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./src/reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./src/hoc/sagas/rootSaga";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
