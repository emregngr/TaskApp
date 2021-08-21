import {StyleSheet} from 'react-native';
import {Sizes} from '../../styles';

const CustomStyles = t =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 20,
    },
    titleText: {
      fontSize: Sizes.TITLE_TEXT,
      color: t.text,
      fontFamily: 'Roboto-Bold',
    },
    icon: {
      color: t.text,
    },
  });

export default CustomStyles;
