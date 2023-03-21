import React from 'react'
import { Text as NativeText } from 'react-native'

interface TextType {
	children: string
}

const Text = ({ children }: TextType): React.ReactElement => {
	return <NativeText>{children}</NativeText>
}

export default Text
