import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IGetHotDeals} from '../api-types';

export interface IDealsState {
  dealsLoading: boolean;
  dealsResult: IGetHotDeals;
  dealsError: boolean;
  dealsResultIds: string[];
}

const initialState: IDealsState = {
  dealsLoading: false,
  dealsResult: [],
  dealsError: false,
  dealsResultIds: [],
};

export type IHotDealsSuccessAction = PayloadAction<IGetHotDeals>;

const dealsSlice = createSlice({
  name: 'dealsSlice',

  initialState,

  reducers: {
    dealsLoading: state => {
      state.dealsLoading = true;
      state.dealsResult = [];
      state.dealsError = false;
    },
    dealsSuccess: (state, action: IHotDealsSuccessAction) => {
      state.dealsLoading = false;
      state.dealsResult = action.payload;
      state.dealsError = false;
      state.dealsResultIds = action.payload.map(
        hotdealItem => hotdealItem.productId,
      );
    },
    dealsError: state => {
      state.dealsLoading = false;
      state.dealsResult = [];
      state.dealsError = true;
    },
  },
});

export const {dealsLoading, dealsSuccess, dealsError} = dealsSlice.actions;

export default dealsSlice.reducer;
