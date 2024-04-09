import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppNavigator } from './appNavigator/AppNavigator';
import { AuthNavigator } from './authNavigator/AuthNavigator';

import { RootStack } from '@/constants';

export const RootNavigation = () => {
  const RootNavigation = createNativeStackNavigator();
  return (
    <RootNavigation.Navigator screenOptions={{ headerShown: false }}>
      {/* <RootNavigation.Screen name = {RootStack.APP} component={AppNavigator} /> */}
      <RootNavigation.Screen name={RootStack.AUTH} component={AuthNavigator} />
    </RootNavigation.Navigator>
  );
};