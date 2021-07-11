import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => { // action == howToChangeState
	switch(action.type){
		case 'increase':
			return {...state, counter: state.counter + action.payload}
		case 'decrease':
			return {...state, counter: state.counter + action.payload}
		default:
			state;
	}
}

const CounterReducerScreen = () => {
	// const [counter, setCounter] = useState(0);
	const [state, dispatch] = useReducer(reducer, {counter: 0})
	// dispatch = callMyReducer
	return (
		<View>
			<Button title="Increase" onPress={() => dispatch({type: 'increase', payload: 5})} />
			<Button title="Decrease" onPress={() => dispatch({type: 'decrease', payload: -5})} />
			<Text>Current Counter: {state.counter} </Text>
		</View>
	)
}

const styles = StyleSheet.create({

})

export default CounterReducerScreen