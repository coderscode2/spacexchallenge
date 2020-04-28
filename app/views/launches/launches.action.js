import {axiosInstance} from '../../api';
import {SET_LAUNCHES} from './launches.constants';
export default (() => {
  const getLaunches = callback => {
    return dispatch => {
      const path = '/launches';
      axiosInstance
        .get(path)
        .then(response => {
          if (response && response.data) {
            dispatch({
              type: SET_LAUNCHES,
              launches: response.data,
            });
            callback && callback(true);
          } else {
            callback && callback(false, response);
          }
        })
        .catch(error => {
          callback(false, error);
        });
    };
  };
  return {
    getLaunches,
  };
})();
