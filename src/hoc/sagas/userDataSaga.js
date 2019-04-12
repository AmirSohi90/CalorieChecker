import { takeEvery, put } from "redux-saga/effects";

import { LOG_WEIGHT } from "../containers/UserData/constants";

import { logGender } from "../containers/UserData/actions";

function* logWeightSaga() {
  console.log("congratulations for logging weight");
}

export default function* watchUserData() {
  yield takeEvery(LOG_WEIGHT, logWeightSaga);
}
