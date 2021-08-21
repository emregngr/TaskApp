import {dealsLoading, dealsSuccess, dealsError} from './dealsSlice';
import axios from 'axios';
import {BASE_URL, API_PREFIX} from '../api-constants';
import {IGetHotDeals} from '../api-types';

export const hotdeals = () => {
  return dispatch => {
    dispatch(dealsLoading());
    axios
      .get(`${BASE_URL}${API_PREFIX.HOT_DEALS}`)
      .then(function (response) {
        // handle success
        if (response && response.status === 200) {
          dispatch(dealsSuccess(response.data as IGetHotDeals));
        }
      })
      .catch(function (error) {
        // handle error
        console.log('error', error);
        dispatch(dealsError());
      });
  };
};
