import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {withThemeStyle} from '../../theme';
import CustomStyles from './styles';
import {Sizes} from '../../styles';

export interface IHeaderProps {
  headerContainer?: StyleProp<ViewStyle>;
  titleText?: StyleProp<TextStyle>;
  icon?: StyleProp<TextStyle>;
  title: string;
  onPress: () => void;
}

const Header = (props: IHeaderProps) => {
  const styles = withThemeStyle(CustomStyles);

  return (
    <View style={[styles.headerContainer, props.headerContainer]}>
      <Text style={[styles.titleText, props.titleText]}>{props.title}</Text>
      <TouchableOpacity onPress={props.onPress}>
        <Icon
          name="menu"
          size={Sizes.HEADER_ICON}
          style={[styles.icon, props.icon]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
