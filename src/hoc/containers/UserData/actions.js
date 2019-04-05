import {
  LOG_WEIGHT,
  LOG_AGE,
  LOG_GENDER,
  LOG_BODY_FAT,
  LOG_ACTIVITY_LEVEL
} from "./constants";

export const logWeight = weight => ({
  type: LOG_WEIGHT,
  weight
});

export const logAge = age => ({
  type: LOG_AGE,
  age
});

export const logGender = gender => ({
  type: LOG_GENDER,
  gender
});

export const logBodyFat = bodyFat => ({
  type: LOG_BODY_FAT,
  bodyFat
});

export const logActivityLevel = activityLevel => ({
  type: LOG_ACTIVITY_LEVEL,
  activityLevel
});
