import {
  productsLoading,
  productsSuccess,
  productsError,
  productTimingsLoading,
  productTimingsSuccess,
  productTimingsError,
  changeThemeSuccess,
} from './homeSlice';
import axios from 'axios';
import {BASE_URL, API_PREFIX} from '../api-constants';
import {IGetProducts, IGetProductTimings} from '../api-types';

export const products = () => {
  return dispatch => {
    dispatch(productsLoading());
    axios
      .get(`${BASE_URL}${API_PREFIX.PRODUCTS}`)
      .then(function (response) {
        // handle success
        if (response && response.status === 200) {
          dispatch(productsSuccess(response.data as IGetProducts));
        }
      })
      .catch(function (error) {
        // handle error
        console.log('error', error);
        dispatch(productsError());
      });
  };
};

export const productTimings = () => {
  return dispatch => {
    dispatch(productTimingsLoading());
    axios
      .get(`${BASE_URL}${API_PREFIX.PRODUCT_TIMINGS}`)
      .then(function (response) {
        // handle success
        if (response && response.status === 200) {
          dispatch(productTimingsSuccess(response.data as IGetProductTimings));
        }
      })
      .catch(function (error) {
        // handle error
        console.log('error', error);
        dispatch(productTimingsError());
      });
  };
};

export const changeTheme = isDarkTheme => {
  return dispatch => {
    dispatch(changeThemeSuccess(isDarkTheme));
  };
};
