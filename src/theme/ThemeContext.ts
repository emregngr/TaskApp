import * as React from 'react';

import {types} from './constants';
import {LightTheme} from './themes';

type ContextProps = {
  themeType: types;
  theme: {};
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ContextProps>({
  themeType: types.LIGHT,
  theme: LightTheme,
  toggleTheme: () => {},
});

ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;
