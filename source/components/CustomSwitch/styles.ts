import { StyleSheet } from 'react-native';

import { colors } from '@/constants';

export const styles = StyleSheet.create({
  tabsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    height: 32,
    width: '100%',
    paddingHorizontal: 10,
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
	fontSize: 18,
  },
  selectedTab: {
    borderBottomColor: colors._FFE7B4,
    borderBottomWidth: 1,
  },
  selectedText: {
	color: colors._FFFFFF,
  }
});
