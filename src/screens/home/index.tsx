import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  Switch,
  ScrollView,
} from 'react-native';
import {products, productTimings, changeTheme} from '../../redux/home/homeApi';
import {basketAdded} from '../../redux/basket/basketApi';
import {Header} from '../../components';
import {types, useTheme, withThemeStyle} from '../../theme';
import Modal from 'react-native-modal';
import {IProduct} from '../../redux/api-types';
import {RootState} from '../../redux/store';
import CustomStyles from './styles';
import {Colors} from '../../styles';

const DealsScreen = ({}) => {
  const dispatch = useDispatch();
  const homeState = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(products());
    dispatch(productTimings());
  }, []);

  useEffect(() => {
    setIsDarkTheme(homeState?.changeThemeResult);
  }, [homeState]);

  const {themeType, toggleTheme} = useTheme();
  const styles = withThemeStyle(CustomStyles);
  const barStyle = themeType === types.DARK ? 'light-content' : 'dark-content';

  const [isMenuModalVisible, setMenuModalVisible] = useState(false);

  const [isDarkTheme, setIsDarkTheme] = useState(homeState?.changeThemeResult);
  const toggleSwitch = () => {
    setIsDarkTheme(previousState => !previousState);
    dispatch(changeTheme(!isDarkTheme));
  };

  const renderItem = ({item}: {item: IProduct}) => (
    <>
      <TouchableOpacity
        style={styles.itemImageContainer}
        onPress={() => {
          dispatch(basketAdded(item));
        }}>
        <Image
          style={styles.image}
          source={{
            uri: item?.image,
          }}
        />
      </TouchableOpacity>
      <View style={styles.itemInfo}>
        <Text style={styles.category}>{item?.category}</Text>
        <Text style={styles.name}>{item?.name}</Text>
        <Text style={styles.price}>${item?.price}</Text>
      </View>
    </>
  );

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={barStyle} />
        <Header
          headerContainer={{marginBottom: 0}}
          title={'Deals'}
          onPress={() => {
            setMenuModalVisible(true);
          }}
        />
        <FlatList
          data={homeState?.productsResult}
          renderItem={renderItem}
          keyExtractor={item => item.id}
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

export default DealsScreen;
