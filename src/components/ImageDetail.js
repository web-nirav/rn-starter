import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, score }) => {
	return (
		<View style={styles.container}>
			<Image source={imageSource} />
			<Text style={styles.titleText}>{title} - Score: {score}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// alignItems: 'start'
		padding: 10
	},
	titleText: {
		fontSize: 20
	}
})

export default ImageDetail;