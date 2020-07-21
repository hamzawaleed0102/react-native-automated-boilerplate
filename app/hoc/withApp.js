import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    app: state.appReducer,
  };
}
const withApp = (Component) => connect(mapStateToProps, null)(Component);
export default withApp;
