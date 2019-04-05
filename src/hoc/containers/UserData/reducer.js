import {
  LOG_WEIGHT,
  LOG_AGE,
  LOG_GENDER,
  LOG_BODY_FAT,
  LOG_ACTIVITY_LEVEL
} from "./constants";

export const initialState = {
  userWeight: null,
  userAge: null,
  userGender: null,
  userBodyFat: null,
  userActivityLevel: null
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_WEIGHT:
      return {
        ...state,
        userWeight: action.weight
      };
    case LOG_AGE:
      return {
        ...state,
        userAge: action.age
      };
    case LOG_GENDER:
      return {
        ...state,
        userGender: action.gender
      };
    case LOG_BODY_FAT:
      return {
        ...state,
        userBodyFat: action.bodyFat
      };
    case LOG_ACTIVITY_LEVEL:
      return {
        ...state,
        userActivityLevel: action.activityLevel
      };
    default:
      return state;
  }
};

export default userDataReducer;
