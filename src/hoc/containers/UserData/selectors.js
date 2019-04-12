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

const makeSelectUserGender = () =>
  createSelector(
    selectUserDataDomain,
    userData => userData.userGender
  );

const makeSelectUserBodyFat = () =>
  createSelector(
    selectUserDataDomain,
    userData => userData.userBodyFat
  );

const makeSelectUserActivityLevel = () =>
  createSelector(
    selectUserDataDomain,
    userData => userData.userActivityLevel
  );

export {
  makeSelectUserWeight,
  makeSelectUserAge,
  makeSelectUserGender,
  makeSelectUserBodyFat,
  makeSelectUserActivityLevel
};
