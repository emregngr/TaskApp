import React from 'react';
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import ThemeProvider from './src/theme';

export default function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
}
