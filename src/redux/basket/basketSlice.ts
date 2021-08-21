import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from '../api-types';

export interface IBasketState {
  basketAddedResult: IProduct[];
}

const initialState: IBasketState = {
  basketAddedResult: [],
};

export type IBasketAddedSuccessAction = PayloadAction<IProduct>;

const basketSlice = createSlice({
  name: 'basketSlice',

  initialState,

  reducers: {
    basketAddedSuccess: (state, action: IBasketAddedSuccessAction) => {
      state.basketAddedResult = [
        ...state.basketAddedResult,
        ...[action.payload],
      ];
    },
  },
});

export const {basketAddedSuccess} = basketSlice.actions;

export default basketSlice.reducer;
