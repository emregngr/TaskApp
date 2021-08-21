import {StyleSheet} from 'react-native';
import {Colors, Sizes} from '../../styles';

const CustomStyles = t =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: t.background,
    },
    itemContainer: {
      flexDirection: 'row',
      margin: 20,
      marginVertical: 10,
      padding: 20,
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
    itemImageContainer: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginVertical: 20,
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
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    itemInfo: {
      margin: 20,
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
    trashIconContainer: {
      position: 'absolute',
      right: 5,
      top: 5,
    },
    trashIcon: {
      color: t.text,
    },
    price: {
      fontSize: Sizes.SMALL_TEXT,
      color: t.text,
      fontFamily: 'Roboto-Medium',
      position: 'absolute',
      right: 20,
      bottom: 20,
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
    iconContainer: {
      padding: 20,
      backgroundColor: Colors.BLUE,
      borderRadius: 50,
    },
    emptyIcon: {
      color: Colors.WHITE,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyText: {
      fontSize: Sizes.MEDIUM_TEXT,
      color: t.text,
      fontFamily: 'Roboto-Medium',
      marginVertical: 20,
    },
    buttonText: {
      color: '#FFF',
      fontFamily: 'Roboto-Medium',
    },
  });

export default CustomStyles;
