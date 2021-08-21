import React from 'react';
import {
  TouchableOpacity,
  Text,
  Dimensions,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import styles from './styles';
import {Colors} from '../../styles';

const {width, height} = Dimensions.get('window');

export interface IButtonProps {
  styleContainer?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  text: string;
  onPress: () => void;
}

const Button = (props: IButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={1}
      style={[
        {
          backgroundColor: Colors.BLUE,
          width: width * 0.9,
          height: height * 0.06,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
        },
        props.styleContainer,
      ]}>
      <Text style={[styles.styleText, props.styleText]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
