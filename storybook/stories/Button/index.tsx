import React from 'react'
import { TouchableHighlight } from 'react-native'

interface ButtonTypes {
	onPress: () => void
	children: React.ReactNode
}

const Button = ({ onPress, children }: ButtonTypes): React.ReactElement => {
	return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>
}

export default Button
