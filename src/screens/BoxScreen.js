import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const BoxScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textOneStyle}> BoxScreen 1</Text>
			<Text style={styles.textTwoStyle}> BoxScreen 2</Text>
			<Text style={styles.textThreeStyle}> BoxScreen 3</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	viewStyle: {
		borderWidth: 3,
		borderColor: '#000',
		alignItems: 'flex-start',
		flexDirection: 'row',
		height: 200,
		// margin: 30,
		// padding: 15,
		justifyContent: 'space-between'
	},
	textStyle:{
		borderWidth: 2,
		borderColor: 'red',
		margin: 5,
		paddingVertical: 5
	},
	textOneStyle:{
		borderWidth: 2,
		borderColor: 'red',
		// flex: 3
	},
	textTwoStyle:{
		borderWidth: 2,
		borderColor: 'green',
		top: 20
		// position: 'absolute', top: 0, bottom: 0, left: 0, right: 0
		// ...StyleSheet.absoluteFillObject
		// position: 'absolute'
		// alignSelf: 'flex-end'
		// flex: 3
	},
	textThreeStyle:{
		borderWidth: 2,
		borderColor: 'blue',
		// flex: 4
	}
})

export default BoxScreen;