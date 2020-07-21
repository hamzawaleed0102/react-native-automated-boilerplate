import * as types from '../types';
import {FULFILLED, PENDING, REJECTED} from '../utils/constants';
import REQUESTS from '../../utils/Request';
import API from '../../utils/API';
import SNACKBAR from '../../components/SnackBar';
const getAllProjects = () => async (dispatch) => {
  dispatch({type: types.GET_ALL_PROJECTS + PENDING});
  try {
    const allProjects = await REQUESTS.getRequest(API.getProjecsList);
    dispatch({
      type: types.GET_ALL_PROJECTS + FULFILLED,
      payload: {
        allProjects,
      },
    });
  } catch (err) {
    console.log('err in getAllProjects', err);
    SNACKBAR(err || 'Network Error!');
    dispatch({
      type: types.GET_ALL_PROJECTS + REJECTED,
      payload: {err},
    });
  }
};

export {getAllProjects};
