import {StyleSheet} from 'react-native';
import {Sizes} from '../../styles';

const CustomStyles = t =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: t.background,
    },
    columnContainer: {
      flexDirection: 'row',
    },
    halfColumnContainer: {
      width: '50%',
    },
    itemContainer: {
      marginHorizontal: 10,
    },
    itemImageContainer: {
      borderRadius: 10,
      backgroundColor: t.background,
      shadowColor: t.text,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.07,
      shadowRadius: 3.84,
      elevation: 5,
    },
    itemInfo: {
      marginTop: 10,
      marginBottom: 20,
      alignItems: 'center',
    },
    name: {
      fontSize: Sizes.SMALL_TEXT,
      color: t.text,
      fontFamily: 'Roboto-Regular',
    },
    category: {
      fontSize: Sizes.SMALL_TEXT,
      color: t.text,
      fontFamily: 'Roboto-Bold',
    },
    price: {
      fontSize: Sizes.SMALL_TEXT,
      color: t.text,
      fontFamily: 'Roboto-Medium',
    },
    menuModalContainer: {
      backgroundColor: t.background,
      marginLeft: 200,
      marginRight: 0,
      marginTop: 60,
      marginBottom: 90,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    switchContainer: {
      flexDirection: 'row',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    changeTheme: {
      fontSize: Sizes.SMALL_TEXT,
      color: t.text,
      fontFamily: 'Roboto-Regular',
      marginRight: 10,
    },
  });

export default CustomStyles;
