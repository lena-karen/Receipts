import { View } from 'react-native';

import { styles } from './styles';

import { CustomButton } from '@/components';
import { ButtonTheme } from '@/constants';

export const Home = () => {
  return (
    <View style = {styles.container}>
      <CustomButton theme={ButtonTheme.primary} buttonTitle="Home" onPress={() => {}} />
    </View>
  );
};