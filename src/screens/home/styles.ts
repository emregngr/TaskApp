import {StyleSheet} from 'react-native';
import {Sizes} from '../../styles';

const CustomStyles = t =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: t.background,
    },
    itemImageContainer: {
      marginHorizontal: 20,
      marginBottom: 10,
      marginVertical: 30,
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
    image: {
      width: '100%',
      height: 240,
      borderRadius: 10,
    },
    itemInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
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
