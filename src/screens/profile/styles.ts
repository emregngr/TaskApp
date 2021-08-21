import {StyleSheet} from 'react-native';

const CustomStyles = t =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: t.background,
    },
  });

export default CustomStyles;
