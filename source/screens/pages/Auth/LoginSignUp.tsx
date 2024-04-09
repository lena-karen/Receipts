import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AppText, CustomButton } from '@/components';

export const LoginSignUp = () => {
  return (
    <View style={styles.container}>
      <AppText>Login</AppText>
      <CustomButton buttonTitle="Login" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    gap: 10,
  },
});
