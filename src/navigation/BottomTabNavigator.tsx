import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';

import HomeStackScreen from './HomeNavigator';
import DealsStackScreen from './DealsNavigator';
import BasketStackScreen from './BasketNavigator';
import ProfileStackScreen from './ProfileNavigator';

import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux/store';
import {withThemeStyle} from '../theme';

import {Colors, Sizes} from '../styles';

const BottomTab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const basketState = useSelector((state: RootState) => state.basket);

  const styles = withThemeStyle(customStyles);

  return (
    <BottomTab.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.BLUE,
        tabBarInactiveTintColor: Colors.DARK_GRAY,
        headerShown: false,
      }}>
      <BottomTab.Screen
        name={'Home'}
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={Sizes.BOTTOM_ICON}
              color={focused ? Colors.BLUE : Colors.DARK_GRAY}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={'Deals'}
        component={DealsStackScreen}
        options={{
          tabBarLabel: 'Deals',
          tabBarIcon: ({focused}) => (
            <Icon
              name="tag"
              size={Sizes.BOTTOM_ICON}
              color={focused ? Colors.BLUE : Colors.DARK_GRAY}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={'Basket'}
        component={BasketStackScreen}
        options={{
          tabBarBadge: basketState?.basketAddedResult?.length
            ? `${basketState?.basketAddedResult?.length}`
            : undefined,
          tabBarLabel: 'Basket',
          tabBarIcon: ({focused}) => (
            <Icon
              name="basket"
              size={Sizes.BOTTOM_ICON}
              color={focused ? Colors.BLUE : Colors.DARK_GRAY}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={'Profile'}
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <Icon
              name="account"
              size={Sizes.BOTTOM_ICON}
              color={focused ? Colors.BLUE : Colors.DARK_GRAY}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const customStyles = t =>
  StyleSheet.create({
    tabBar: {
      backgroundColor: t.background,
    },
  });

export default BottomTabNavigator;
