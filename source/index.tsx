import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import {colors, dark, light} from './constants';
import {RootNavigation} from './screens/navigation/RootNavigation';

export const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <LinearGradient
      colors={[colors._D3841C, colors._FFFFFF]}
      style={styles.container}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer theme={isDarkMode ? dark : light}>
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
