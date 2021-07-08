import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const ColorsScreen = () => {

	const [colors, setColors] = useState([]);
	console.log(colors)
	return (
		<View>
			<Button onPress={() => setColors([...colors, randomRgb()])} title="Add a Color" />
			<FlatList
				keyExtractor={item => { console.log(item); return item; }}
				data={colors}
				renderItem={(props) => {
					return (
						<View style={{ height: 100, width: 100, backgroundColor: props.item }}></View>
					);
				}}
			/>
		</View>
	)
}

const randomRgb = () => {
	const red = Math.floor(Math.random() * 256)
	const green = Math.floor(Math.random() * 256)
	const blue = Math.floor(Math.random() * 256)

	return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({

});

export default ColorsScreen;