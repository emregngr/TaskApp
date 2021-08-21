import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BasketScreen from '../screens/basket';

const BasketStack = createStackNavigator();
const BasketStackScreen = () => {
  return (
    <BasketStack.Navigator initialRouteName={'BasketScreen'}>
      <BasketStack.Screen
        name={'BasketScreen'}
        component={BasketScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </BasketStack.Navigator>
  );
};

export default BasketStackScreen;
