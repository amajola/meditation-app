import React from 'react'
import {
	View as NativeView,
	Text,
	StyleSheet,
	type StyleProp,
	type ViewStyle
} from 'react-native'

export interface BoxTypes {
	styles?: StyleProp<ViewStyle>
}

const defaultProps: BoxTypes = {
	styles: {}
}

export const baseBoxStyles = StyleSheet.create({
	container: {
		backgroundColor: 'blue',
		paddingTop: 35,
		paddingHorizontal: 20
	}
})

const Box = ({ styles }: BoxTypes): React.ReactElement => {
	return (
		<NativeView style={[styles, baseBoxStyles.container]}>
			<Text>Asimthande Majola</Text>
			<Text>Asimthande Majola</Text>
			<Text>Asimthande Majola</Text>
			<Text>Asimthande Majola</Text>
			<Text>Asimthande Majola</Text>
			<Text>Asimthande Majola</Text>
		</NativeView>
	)
}
Box.defaultProps = defaultProps
export default Box
