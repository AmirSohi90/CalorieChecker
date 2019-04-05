import { logWeight } from "../hoc/containers/UserData/actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const userWeight = state.userData.userWeight;
  return { userWeight };
};

const mapDispatchToProps = {
  logWeight
};

const HomeScreenHoc = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default HomeScreenHoc;
