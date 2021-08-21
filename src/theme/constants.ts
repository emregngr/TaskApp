import {DarkTheme, LightTheme} from './themes';

export enum types {
  LIGHT = 'light',
  DARK = 'dark',
}

export const themes = {
  [types.LIGHT]: LightTheme,
  [types.DARK]: DarkTheme,
};
