import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  Switch,
  ScrollView,
} from 'react-native';
import {products} from '../../redux/home/homeApi';
import {hotdeals} from '../../redux/deals/dealsApi';
import {basketAdded} from '../../redux/basket/basketApi';
import {changeTheme} from '../../redux/home/homeApi';
import {Header} from '../../components';
import {types, useTheme, withThemeStyle} from '../../theme';
import Modal from 'react-native-modal';
import {IProduct} from '../../redux/api-types';
import {RootState} from '../../redux/store';
import CustomStyles from './styles';
import {Colors} from '../../styles';

const DealsScreen = ({}) => {
  const dispatch = useDispatch();
  const dealsState = useSelector((state: RootState) => state.deals);
  const homeState = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(products());
    dispatch(hotdeals());
  }, []);

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

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={barStyle} />
        <Header
          title={'Hottest Deals'}
          onPress={() => {
            setMenuModalVisible(true);
          }}
        />
        <ScrollView>
          <View style={styles.columnContainer}>
            <View style={styles.halfColumnContainer}>
              {dealsState?.dealsResultIds.map((id: string, index: number) => {
                const item: IProduct =
                  homeState.productsResultObjects[Number(id)];
                const itemHeight: number = Number(item?.image?.slice(25, 28));
                return index % 2 == 0 && item ? (
                  <View style={styles.itemContainer}>
                    <TouchableOpacity
                      style={styles.itemImageContainer}
                      onPress={() => {
                        dispatch(basketAdded(item));
                      }}>
                      <Image
                        style={{
                          width: '100%',
                          height: itemHeight,
                          borderRadius: 10,
                        }}
                        source={{
                          uri: item?.image,
                        }}
                      />
                    </TouchableOpacity>
                    <View style={styles.itemInfo}>
                      <Text style={styles.category}>{item?.category}</Text>
                      <Text style={styles.name} numberOfLines={1}>
                        {item?.name}
                      </Text>
                      <Text style={styles.price}>${item?.price}</Text>
                    </View>
                  </View>
                ) : (
                  <></>
                );
              })}
            </View>
            <View style={styles.halfColumnContainer}>
              {dealsState?.dealsResultIds.map((id: string, index: number) => {
                const item: IProduct =
                  homeState.productsResultObjects[Number(id)];
                const itemHeight: number = Number(item?.image?.slice(25, 28));
                return index % 2 == 1 && item ? (
                  <View style={styles.itemContainer}>
                    <TouchableOpacity
                      style={styles.itemImageContainer}
                      onPress={() => {
                        dispatch(basketAdded(item));
                      }}>
                      <Image
                        style={{
                          width: '100%',
                          height: itemHeight,
                          borderRadius: 10,
                        }}
                        source={{
                          uri: item?.image,
                        }}
                      />
                    </TouchableOpacity>
                    <View style={styles.itemInfo}>
                      <Text style={styles.category}>{item?.category}</Text>
                      <Text style={styles.name} numberOfLines={1}>
                        {item?.name}
                      </Text>
                      <Text style={styles.price}>${item?.price}</Text>
                    </View>
                  </View>
                ) : (
                  <></>
                );
              })}
            </View>
          </View>
        </ScrollView>
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
