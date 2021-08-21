import UseTheme from './useTheme';

export default function withThemeStyle(style) {
  const {theme} = UseTheme();
  return style(theme);
}
