import {colors} from '@/constants';
import {StyleSheet, ViewStyle} from 'react-native';

export type ButtonThemes = {
  primary: ViewStyle;
  secondary: ViewStyle;
  ghost: ViewStyle;
};

export function getButtonThemes(disabled: boolean | undefined): ButtonThemes {
  return {
    primary: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: disabled ? colors._FFE7B4 : colors._FFB315,
      borderRadius: 20,
    },
    secondary: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: disabled ? colors._FFE7B4 : colors._FFFFFF,
      borderWidth: 1,
      borderColor: colors._FFB315,
      borderRadius: 20,
    },
    ghost: {},
  };
}

export const styles = StyleSheet.create({
  titleStyleSecondary: {
    color: colors._FFB315,
  },
});
