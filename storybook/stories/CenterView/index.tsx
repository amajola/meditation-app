import React from 'react'
import { View } from 'react-native'
import style from './style'

interface CenterViewTypes {
	children: React.ReactNode
}

const CenterView = ({ children }: CenterViewTypes): React.ReactElement => {
	return <View style={style.main}>{children}</View>
}

export default CenterView
