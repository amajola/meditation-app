import { type FlexStyle } from 'react-native/types'

export interface FlexProperties {
	display?: FlexStyle['display']
	direction?: FlexStyle['flexDirection']
	wrap?: FlexStyle['flexWrap']
	justify?: FlexStyle['justifyContent']
	items?: FlexStyle['alignItems']
	content?: FlexStyle['alignContent']
	flex?: FlexStyle['flex']
	basis?: FlexStyle['flexBasis']
	grow?: FlexStyle['flexGrow']
	shrink?: FlexStyle['flexShrink']
	self?: FlexStyle['alignSelf']
}

export const createFlexStyle = (flexProps: FlexProperties): FlexStyle => {
	return {
		display: flexProps.display,
		flexDirection: flexProps.direction,
		flexWrap: flexProps.wrap,
		justifyContent: flexProps.justify,
		alignItems: flexProps.items,
		alignContent: flexProps.content,
		flexGrow: flexProps.grow,
		flexShrink: flexProps.shrink,
		alignSelf: flexProps.self
	}
}
