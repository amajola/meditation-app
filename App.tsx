import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import { StorybookUIRoot } from './storybook/index.tsx'

// Todo fix the `Unhandled promise rejection [RangeError: Maximum call stack size exceeded (native stack depth)]`
// on the Storybook UI
const App = (): React.ReactElement => {
	if (Constants.expoConfig?.extra?.storybookEnabled as boolean) {
		return <StorybookUIRoot />
	} else {
		return (
			<View style={styles.container}>
				<Text>Open up App.tsx to start working on your app!</Text>
				<StatusBar />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default App
