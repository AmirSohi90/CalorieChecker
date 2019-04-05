import { all } from "redux-saga/effects";

import watchUserData from "./userDataSaga";

export default function* rootSaga() {
  yield all([watchUserData()]);
}
