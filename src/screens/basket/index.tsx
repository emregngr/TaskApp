import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  Image,
  StatusBar,
  Switch,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {types, useTheme, withThemeStyle} from '../../theme';
import Modal from 'react-native-modal';
import {Header, Button} from '../../components';
import {changeTheme} from '../../redux/home/homeApi';
import {IProduct} from '../../redux/api-types';
import {RootState} from '../../redux/store';
import CustomStyles from './styles';
import {Colors, Sizes} from '../../styles';

const Basket = ({navigation}) => {
  const dispatch = useDispatch();
  const basketState = useSelector((state: RootState) => state.basket);
  const homeState = useSelector((state: RootState) => state.home);

  const {themeType, toggleTheme} = useTheme();
  const styles = withThemeStyle(CustomStyles);
  const barStyle = themeType === types.DARK ? 'light-content' : 'dark-content';

  const [isMenuModalVisible, setMenuModalVisible] = useState(false);

  useEffect(() => {
    setIsDarkTheme(homeState?.changeThemeResult);
  }, [homeState]);

  const [isDarkTheme, setIsDarkTheme] = useState(homeState?.changeThemeResult);
  const toggleSwitch = () => {
    setIsDarkTheme(previousState => !previousState);
    dispatch(changeTheme(!isDarkTheme));
  };

  const renderItem = ({item}: {item: IProduct}) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemImageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item?.image,
          }}
        />
      </View>
      <View style={styles.itemInfo}>
        <Text style={styles.category}>{item?.category}</Text>
        <Text style={styles.name} numberOfLines={1}>
          {item?.name}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.trashIconContainer}
        onPress={() => {
          Alert.alert(
            'Warning',
            'Are you sure you want to delete the product from the basket?',
            [
              {
                text: 'Give up',
                style: 'cancel',
              },
              {
                text: ' Delete',
                style: 'destructive',
                onPress: () => {},
              },
            ],
          );
        }}>
        <Icon
          name="trash-can-outline"
          size={Sizes.SCREEN_ICON}
          style={styles.trashIcon}
        />
      </TouchableOpacity>
      <Text style={styles.price}>${item?.price}</Text>
    </View>
  );

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={barStyle} />
        <Header
          title={'Basket'}
          onPress={() => {
            setMenuModalVisible(true);
          }}
        />
        <FlatList
          data={basketState?.basketAddedResult}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <View style={styles.iconContainer}>
                <Icon
                  name="basket"
                  size={Sizes.SCREEN_ICON}
                  style={styles.emptyIcon}
                />
              </View>
              <Text style={styles.emptyText}>
                There are no items in your basket
              </Text>
              <Button
                text={'Keep Shopping'}
                styleText={styles.buttonText}
                onPress={() => {
                  navigation.navigate('HomeScreen');
                }}
              />
            </View>
          )}
        />
      </SafeAreaView>
      <Modal
        style={styles.menuModalContainer}
        isVisible={isMenuModalVisible}
        backdropOpacity={0.3}
        onBackdropPress={() => setMenuModalVisible(false)}>
        <ScrollView>
          <View style={styles.switchContainer}>
            <Text style={styles.changeTheme}>Dark Theme</Text>
            <Switch
              trackColor={{false: Colors.GRAY, true: Colors.BLUE}}
              thumbColor={isDarkTheme ? Colors.WHITE : Colors.BLUE}
              ios_backgroundColor={Colors.GRAY}
              onValueChange={() => {
                toggleSwitch();
                toggleTheme();
              }}
              value={isDarkTheme}
            />
          </View>
        </ScrollView>
      </Modal>
    </>
  );
};

export default Basket;
