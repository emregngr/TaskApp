import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../screens/profile';

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator initialRouteName={'ProfileScreen'}>
      <ProfileStack.Screen
        name={'ProfileScreen'}
        component={ProfileScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
