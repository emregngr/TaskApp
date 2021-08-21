import React, {useState} from 'react';

import ThemeContext from './ThemeContext';
import {themes, types} from './constants';

const ThemeProvider = ({children}) => {
  const [themeType, setThemeType] = useState(types.LIGHT);
  const theme = themes[themeType];

  const themeContextValue = {
    theme,
    themeType,
    toggleTheme: () => {
      setThemeType(themeType === types.DARK ? types.LIGHT : types.DARK);
    },
  };
  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
