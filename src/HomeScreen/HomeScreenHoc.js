import { logWeight } from "../hoc/containers/UserData/actions";
import { makeSelectUserWeight } from "../hoc/containers/UserData/selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// the createStructuredSelector means we can use the selector when mapping our state to props
const mapStateToProps = createStructuredSelector({
  userWeight: makeSelectUserWeight()
});

const mapDispatchToProps = {
  logWeight
};

const HomeScreenHoc = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default HomeScreenHoc;
