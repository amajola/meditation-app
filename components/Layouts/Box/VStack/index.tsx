import React from 'react'
import { View as NativeView, StyleSheet, type FlexStyle } from 'react-native'
import { type BoxTypes } from '..'
import { baseBoxStyles } from '..'
import { createFlexStyle, type FlexProperties } from './types'

interface FlexboxType extends BoxTypes, FlexProperties {
	children: React.ReactElement | React.ReactElement[]
}

const useMemoStyles = (styles: FlexProperties): FlexStyle => {
	const elementStyles = React.useMemo(
		() => StyleSheet.create({ flexStyles: createFlexStyle(styles) }).flexStyles,
		[styles]
	)

	return elementStyles
}

const Flexbox = ({
	styles,
	children,
	...props
}: FlexboxType): React.ReactElement => {
	const flexStyles = useMemoStyles(props)
	return (
		<NativeView style={[baseBoxStyles.container, flexStyles]}>
			{children}
		</NativeView>
	)
}

export default Flexbox
