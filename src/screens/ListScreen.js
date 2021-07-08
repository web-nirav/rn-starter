import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';

const ListScreen = () => {

	const friends = [
		{ name: 'Friend #0', age: 19 },
		{ name: 'Friend #1', age: 20 },
		{ name: 'Friend #2', age: 21 },
		{ name: 'Friend #3', age: 22 },
		{ name: 'Friend #4', age: 23 },
		{ name: 'Friend #5', age: 24 },
		{ name: 'Friend #6', age: 25 }
	]
	return (
		<FlatList
			// horizontal
			// showsHorizontalScrollIndicator={false}
			keyExtractor={friend => friend.name}
			data={friends}
			renderItem={({ item }) => {
				return <Text style={styles.textStyle}>{item.name}, Age - {item.age}</Text>
			}}
		/>
	)
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30,
		marginVertical: 50
	}
})

export default ListScreen;