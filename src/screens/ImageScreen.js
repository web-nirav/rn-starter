import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
	return (
		<View>
			<Text style={styles.titleText}>Image screen</Text>
			<ImageDetail score={19} title="Beach" imageSource={require('../../assets/beach.jpg')} />
			<ImageDetail score={91} title="Forest" imageSource={require('../../assets/forest.jpg')} />
			<ImageDetail score={11} title="Mountain" imageSource={require('../../assets/mountain.jpg')} />
		</View>
	)
}

const styles = StyleSheet.create({
	titleText: {
		fontSize: 30,
		padding: 20
	}
})

export default ImageScreen;