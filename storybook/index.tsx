import {
	getStorybookUI,
	configure,
	addDecorator
} from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import AsyncStorage from '@react-native-async-storage/async-storage'

import './rn-addons'

// enables knobs for all stories
addDecorator(withKnobs)

// import stories
configure(() => {
	require('./stories/index.ts')
}, module)

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
export const StorybookUIRoot = getStorybookUI({
	asyncStorage: AsyncStorage
})
