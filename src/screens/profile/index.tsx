import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import {types, useTheme, withThemeStyle} from '../../theme';
import CustomStyles from './styles';

const ProfileScreen = ({}) => {
  const {themeType, toggleTheme} = useTheme();
  const styles = withThemeStyle(CustomStyles);
  const barStyle = themeType === types.DARK ? 'light-content' : 'dark-content';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={barStyle} />
      <Text></Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
