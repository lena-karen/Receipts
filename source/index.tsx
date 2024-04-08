import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomButton, CustomSwitch} from '@/components';

export const App = () => {
  return (
    <View style={styles.flexContainer}>
      <CustomSwitch
        firstComponent={() => (
          <View style={styles.flexContainer}>
            <CustomButton onPress={() => {}} buttonTitle="Hi" />
          </View>
        )}
        firstTitle="Hi"
        secondComponent={() => (
          <View style={styles.flexContainer}>
            <CustomButton onPress={() => {}} buttonTitle="Ok" />
          </View>
        )}
        secondTitle="Ok"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
