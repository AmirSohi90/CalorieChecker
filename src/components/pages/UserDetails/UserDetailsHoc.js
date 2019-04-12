import {
  makeSelectUserWeight,
  makeSelectUserAge,
  makeSelectUserGender,
  makeSelectUserBodyFat,
  makeSelectUserActivityLevel
} from "../../../hoc/containers/UserData/selectors";
import { logWeight } from "../../../hoc/containers/UserData/actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// the createStructuredSelector means we can use the selector when mapping our state to props
const mapStateToProps = createStructuredSelector({
  userWeight: makeSelectUserWeight(),
  userAge: makeSelectUserAge(),
  userGender: makeSelectUserGender(),
  userBodyFat: makeSelectUserBodyFat(),
  userActivityLevel: makeSelectUserActivityLevel()
});

const mapDispatchToProps = { logWeight };

const UserDetailsHoc = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default UserDetailsHoc;
