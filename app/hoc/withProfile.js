import {connect} from 'react-redux';
import {getUserProfile, login} from '../store/actions/AuthActions';
const mapDispatchToProps = {
  getUserProfile,
  login,
};

function mapStateToProps(state) {
  return {
    profile: state.profileReducer,
  };
}
const withAuth = (Component) =>
  connect(mapStateToProps, mapDispatchToProps)(Component);
export default withAuth;
