import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import StorybookUIRoot from './storybook'

const App = (): React.ReactElement => {
	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
			<StatusBar />
		</View>
	)
}

const AppEntryPointApp = App
let AppEntryPointStorybook

const apiUrl = Constants.expoConfig?.extra?.storybookEnabled
if (apiUrl === 'true') {
	AppEntryPointStorybook = StorybookUIRoot
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default AppEntryPointStorybook ?? AppEntryPointApp
