import axios from 'axios';
import STORE from '../store';

// axios.interceptors.response.use(
//   function(response) {
//     return response;
//   },
//   function(error) {
//     try {
//       crashlytics().log(
//         typeof error === 'object' ? JSON.stringify(error) : error.toString(),
//       );
//       return Promise.reject(error);
//     } catch (er) {
//       return Promise.reject(er);
//     }
//   },
// );

const getRequest = async (url, params) => {
  try {
    let resp = await axios.get(url, {
      params: {...params},
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return resp.data;
  } catch (error) {
    if (error?.response?.data) {
      throw error.response.data.errorMessage;
    } else {
      throw error.toString();
    }
  }
};

const postRequest = async (url, params, withToken) => {
  const contentType = 'application/json';
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': contentType,
    },
  };

  try {
    if (withToken) {
      params.Token = STORE.getState().authReducer.user.token;
    }
    let resp = await axios.post(url, params, config);
    return resp.data;
  } catch (error) {
    console.warn('eror.response post req---', error.response);
    if (error?.response) {
      throw error.response;
    } else {
      throw error.toString();
    }
  }
};

const putRequest = async (url, params) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    let resp = await axios.put(url, params, config);
    return resp.data;
  } catch (error) {
    console.warn('eror.response PUT req---', error.response);
    if (error?.response?.data) {
      throw error.response.data.errorMessage;
    } else {
      throw error.toString();
    }
  }
};

// export const postRequestWithFile = async (url, formData) => {
//   const config = { headers: { "Content-Type": "multipart/form-data" } };
//   try {
//     let response = await axios.post(url, formData, config);
//     let { data, statusCode, msg } = response.data;
//     if (statusCode == 200) {
//       return { data, msg };
//     } else {
//       throw { message: msg };
//     }
//   } catch (error) {
//     throw error.message;
//   }
// };
export const postRequestWithFile = async (url, parameters, withToken) => {
  if (withToken) {
    parameters.Token = STORE.getState().authReducer.user.token;
  }
  const formData = new FormData();
  for (var key in parameters) {
    formData.append(key, parameters[key]);
  }
  try {
    let response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
const REQUESTS = {getRequest, postRequest, putRequest, postRequestWithFile};
export default REQUESTS;
