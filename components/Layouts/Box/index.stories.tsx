import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Text } from 'react-native'
import Box from './index'
import Flexbox from './VStack'

storiesOf('Box', module)
	.add('Empty Box', () => <Box />)
	.add('Flexbox', () => (
		<Flexbox display="flex" justify="center" items="center">
			<Text>Asimthande Majola</Text>
			<Text>Asimthande Majola</Text>
			<Text>Asimthande Majola</Text>
			<Text>Asimthande Majola</Text>
			<Text>Asimthande Majola</Text>
			<Text>Asimthande Majola</Text>
		</Flexbox>
	))
