import React from 'react';
import {View} from 'react-native';
import {AppText} from '@/components';
import {colors} from '@/constants';

export const App = () => {
  return (
    <View
      style={{
        backgroundColor: colors._D3841C,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <AppText>Hi</AppText>
    </View>
  );
};

export default App;
