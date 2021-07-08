import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INC = 15;

const SquareScreen = () => {
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);
	return (
		<View>
			<ColorCounter onIncrease={() => setRed(red + COLOR_INC)} onDecrease={() => setRed(red - COLOR_INC)} color="Red" />
			<ColorCounter onIncrease={() => setGreen(green + COLOR_INC)} onDecrease={() => setGreen(green - COLOR_INC)} color="Green" />
			<ColorCounter onIncrease={() => setBlue(blue + COLOR_INC)} onDecrease={() => setBlue(blue - COLOR_INC)} color="Blue" />
			<View style={{ width: 100, height: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />
		</View>
	)
}

export default SquareScreen;