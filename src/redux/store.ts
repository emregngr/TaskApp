import {configureStore} from '@reduxjs/toolkit';
import homeReducer from './home/homeSlice';
import dealsReducer from './deals/dealsSlice';
import basketReducer from './basket/basketSlice';

const rootReducer = configureStore({
  reducer: {
    home: homeReducer,
    deals: dealsReducer,
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof rootReducer.getState>;

export default rootReducer;
