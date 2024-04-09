import React, { FC } from 'react';
import { ActivityIndicator, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { AppText } from '../AppText/AppText';

import { ButtonThemes, getButtonThemes, styles } from './styles';


import { ButtonTheme, colors } from '@/constants';


type customButtonProps = {
  buttonTitle?: string;
  onPress: () => void;
  leftIcon?: JSX.Element | null;
  style?: ViewStyle;
  theme?: ButtonTheme.primary | ButtonTheme.secondary | ButtonTheme.ghost;
  titleStyle?: TextStyle;
  disabled?: boolean;
  isLoading?: boolean;
};
export const CustomButton: FC<customButtonProps> = ({
  buttonTitle,
  onPress,
  leftIcon,
  style,
  theme = ButtonTheme.primary,
  titleStyle,
  disabled,
  isLoading,
}) => {
  const buttonThemes: ButtonThemes = getButtonThemes(disabled);
  const buttonStyles: ViewStyle = buttonThemes[theme];

  const Block = disabled ? View : LinearGradient

  return (
    <TouchableOpacity style={[buttonStyles, style]} onPress={onPress}>
      <Block
        start={{ x: 0.1, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={[
          theme === ButtonTheme.primary ? colors._FFB315 : colors._FFFFFF,
          theme === ButtonTheme.primary ? colors._D3841C : colors._FFFFFF,
        ]}
        style={buttonStyles}
      >
		{
			isLoading && <ActivityIndicator color={colors._D3841C}/>
		}
        {leftIcon && !isLoading && leftIcon}
        {buttonTitle &&  !isLoading && (
          <AppText
            style={
              [theme === ButtonTheme.secondary && styles.titleStyleSecondary, titleStyle] as TextStyle
            }
          >
            {buttonTitle}
          </AppText>
        )}
      </Block>
    </TouchableOpacity>
  );
};