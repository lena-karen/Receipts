import { StyleSheet } from 'react-native';

import { colors } from '@/constants';

export const styles = StyleSheet.create({
	inputContainer: {
		width: '100%',
		flexDirection: 'row'
	},
	input: {
		width: '100%',
		height: 50,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderWidth: 1, 
		borderColor: colors._D3841C,
		borderRadius: 20,
	},
	eye: {
		position: 'absolute',
		right: 10, 
		top: 10
	}
})
