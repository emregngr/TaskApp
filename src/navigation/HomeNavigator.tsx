import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/home';

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName={'HomeScreen'}>
      <HomeStack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
