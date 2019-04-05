import { createSelector } from "reselect";

//this function feteches the userData state
const selectUserDataDomain = state => state.userData;

// this selector uses the userData state to return the userWeight
const makeSelectUserWeight = () =>
  createSelector(
    selectUserDataDomain,
    userData => userData.userWeight
  );

const makeSelectUserAge = () =>
  createSelector(
    selectUserDataDomain,
    userData => userData.userAge
  );

export { makeSelectUserWeight, makeSelectUserAge };
