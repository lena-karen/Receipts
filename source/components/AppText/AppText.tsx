import React, {FC} from 'react';
import {Text, TextStyle} from 'react-native';
import {Fonts} from '@/constants';
import {styles} from './styles';

type appTextProps = {
  style?: TextStyle | null;
  children: string;
  fontFamily?: string;
};

export const AppText: FC<appTextProps> = ({
  children,
  style,
  fontFamily = Fonts.UbuntuRegular,
}) => {
  return (
    <Text style={[styles.text, style, {fontFamily: fontFamily}]}>
      {children}
    </Text>
  );
};
