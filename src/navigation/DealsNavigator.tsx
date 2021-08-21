import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DealsScreen from '../screens/deals';

const DealsStack = createStackNavigator();
const DealsStackScreen = () => {
  return (
    <DealsStack.Navigator initialRouteName={'DealsScreen'}>
      <DealsStack.Screen
        name={'DealsScreen'}
        component={DealsScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </DealsStack.Navigator>
  );
};

export default DealsStackScreen;
