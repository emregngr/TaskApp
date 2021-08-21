import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';

const RootStack = createStackNavigator();
function Router() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        headerMode="none"
        mode="modal"
        initialRouteName={'BottomTab'}>
        <>
          <RootStack.Screen
            name={'BottomTab'}
            component={BottomTabNavigator}
            options={{
              animationEnabled: false,
            }}
          />
        </>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
