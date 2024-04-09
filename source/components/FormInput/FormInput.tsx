import React, { FC, useState } from 'react';
import { useCallback } from 'react';
import { TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';

import { materialIcons } from '@/assets';


type fromInputProps = {
  placeholder: string;
  isPassword?: boolean;
};

export const FormInput: FC<fromInputProps> = ({ placeholder, isPassword = false }) => {
  const [isVisible, setIsVisible] = useState<boolean>(isPassword);

  const handleIsVisible = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, [setIsVisible]);

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder={placeholder} secureTextEntry={isVisible} />
      {isPassword && (
        <TouchableOpacity style={styles.eye} onPress={handleIsVisible}>
          <Icon name={isVisible ? materialIcons.eye_off : materialIcons.eye_outline} size={30} />
        </TouchableOpacity>
      )}
    </View>
  );
};
