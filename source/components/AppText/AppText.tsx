import React, { FC } from 'react';
import { Text, TextStyle } from 'react-native';

import { styles } from './styles';

import { Fonts } from '@/constants';

type appTextProps = {
  style?: TextStyle | null;
  children: string;
  fontFamily?: string;
};

export const AppText: FC<appTextProps> = ({ children, style, fontFamily = Fonts.UbuntuRegular }) => {
  return <Text style={[styles.text, style, { fontFamily: fontFamily }]}>{children}</Text>;
};
