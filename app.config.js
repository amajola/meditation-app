module.exports = {
	name: 'meditation-app',
	slug: 'meditation-app',
	version: '1.0.0',
	orientation: 'portrait',
	icon: './assets/icon.png',
	userInterfaceStyle: 'light',
	splash: {
		image: './assets/splash.png',
		resizeMode: 'contain',
		backgroundColor: '#ffffff'
	},

	updates: {
		url: 'https://u.expo.dev/2f64b51c-1f1a-4152-b7b1-ec376f2690d3'
	},
	runtimeVersion: {
		policy: 'sdkVersion'
	},
	extra: {
		storybookEnabled: process.env.STORYBOOK_ENABLED,
		eas: {
			projectId: '2f64b51c-1f1a-4152-b7b1-ec376f2690d3'
		}
	},
	assetBundlePatterns: ['**/*'],
	ios: {
		supportsTablet: true,
		bundleIdentifier: 'com.wethefutr.meditationApp'
	},
	android: {
		package: 'com.wethefutr.meditationApp',
		adaptiveIcon: {
			foregroundImage: './assets/adaptive-icon.png',
			backgroundColor: '#ffffff'
		}
	},
	web: {
		favicon: './assets/favicon.png'
	}
}
