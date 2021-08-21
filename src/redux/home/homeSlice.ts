import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IGetProducts, IGetProductTimings, IProduct} from '../api-types';

export interface IHomeState {
  productsLoading: boolean;
  productsResult: IGetProducts;
  productsError: boolean;
  productsResultObjects: {[key: number]: IProduct};

  productTimingsLoading: boolean;
  productTimingsResult: IGetProductTimings;
  productTimingsError: boolean;

  changeThemeResult: boolean;
}

const initialState: IHomeState = {
  productsLoading: false,
  productsResult: [],
  productsError: false,
  productsResultObjects: {},

  productTimingsLoading: false,
  productTimingsResult: [],
  productTimingsError: false,

  changeThemeResult: false,
};

export type IProductsSuccessAction = PayloadAction<IGetProducts>;
export type IProductTimingsSuccessAction = PayloadAction<IGetProductTimings>;
export type IChangeThemeSuccessAction = PayloadAction<boolean>;

const homeSlice = createSlice({
  name: 'homeSlice',

  initialState,

  reducers: {
    productsLoading: state => {
      state.productsLoading = true;
      state.productsResult = [];
      state.productsError = false;
    },
    productsSuccess: (state, action: IProductsSuccessAction) => {
      const productsResultObjectsCreator = {};
      action.payload.forEach(productItem => {
        productsResultObjectsCreator[productItem.id] = productItem;
      });
      state.productsLoading = false;
      state.productsResult = action.payload;
      state.productsError = false;
      state.productsResultObjects = productsResultObjectsCreator;
    },
    productsError: state => {
      state.productsLoading = false;
      state.productsResult = [];
      state.productsError = true;
    },

    productTimingsLoading: state => {
      state.productTimingsLoading = true;
      state.productTimingsResult = [];
      state.productTimingsError = false;
    },
    productTimingsSuccess: (state, action: IProductTimingsSuccessAction) => {
      state.productTimingsLoading = false;
      state.productTimingsResult = action.payload;
      state.productTimingsError = false;
    },
    productTimingsError: state => {
      state.productTimingsLoading = false;
      state.productTimingsResult = [];
      state.productTimingsError = true;
    },

    changeThemeSuccess: (state, action: IChangeThemeSuccessAction) => {
      state.changeThemeResult = action.payload;
    },
  },
});

export const {
  productsLoading,
  productsSuccess,
  productsError,
  productTimingsLoading,
  productTimingsSuccess,
  productTimingsError,
  changeThemeSuccess,
} = homeSlice.actions;

export default homeSlice.reducer;
