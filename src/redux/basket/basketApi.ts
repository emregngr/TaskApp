import {Alert} from 'react-native';
import {basketAddedSuccess} from './basketSlice';

export const basketAdded = item => {
  return dispatch => {
    dispatch(basketAddedSuccess(item));
    Alert.alert('Information', `${item.name} added to basket.`);
  };
};
