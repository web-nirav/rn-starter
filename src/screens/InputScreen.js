import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputScreen = () => {
	const [password, setPassword] = useState('');
	return (
		<View>
			<Text>Enter Password: 	</Text>	
			<TextInput
				autoCorrect={false}
				autoCapitalize="none"
				value={password}
				placeholder="Enter Password!"
				onChangeText={(password) => setPassword(password)}
				style={styles.inputStyle}
			/>
			{password.length > 5 && <Text>Password is: {password}</Text>}
			
		</View>
	)
}

const styles = StyleSheet.create({
	inputStyle:{
		height:40,
		borderWidth: 2,
		margin: 20
	}
})

export default InputScreen;