import React, { FC, useCallback, useState } from 'react';
import { TextStyle, TouchableWithoutFeedback, View } from 'react-native';

import { SceneMap, TabView } from 'react-native-tab-view';

import { AppText } from '../AppText/AppText';

import { styles } from './styles';

import { Fonts } from '@/constants';

type customSwitchProps = {
  firstComponent: () => JSX.Element;
  firstTitle: string;
  secondComponent: () => JSX.Element;
  secondTitle: string;
  defaultIndex?: number;
};

export const CustomSwitch: FC<customSwitchProps> = ({
  firstComponent,
  firstTitle,
  secondComponent,
  secondTitle,
  defaultIndex = 0,
}) => {
  const [index, setIndex] = useState<number>(defaultIndex);

  const [routes] = useState([
    { key: 'first', title: firstTitle },
    { key: 'second', title: secondTitle },
  ]);

  const renderScene = SceneMap({
    first: firstComponent,
    second: secondComponent,
  });

  const renderTabBar = useCallback(
    (props: { navigationState: { routes: any[] } }) => {
      return (
        <View style={[styles.tabsContainer]}>
          {props.navigationState.routes.map((route, i) => {
            const isSelectedTab = index === i;
            return (
              <TouchableWithoutFeedback key={i} onPress={() => setIndex(i)}>
                <View style={[styles.tabContainer, isSelectedTab && styles.selectedTab]}>
                  <AppText
                    fontFamily={isSelectedTab ? Fonts.UbuntuMedium : Fonts.UbuntuRegular}
                    style={[styles.text, isSelectedTab && styles.selectedText] as TextStyle}
                  >
                    {route.title.toUpperCase()}
                  </AppText>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      );
    },
    [index],
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      lazy
      swipeEnabled={true}
    />
  );
};
