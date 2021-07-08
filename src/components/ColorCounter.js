import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
	return (
		<View>
			<Text>Color {color}</Text>
			<Button onPress={() => onIncrease()} title={`Increase ${color}`} />
			<Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
		</View>
	)
}

export default ColorCounter;