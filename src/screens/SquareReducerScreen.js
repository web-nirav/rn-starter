import React, { useReducer } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INC = 15;

const reducer = (state, action) => {
	// state === {red: number, green: number, blue: number}
	// action === {colorToChange: 'red' || 'green' || 'blude', amount: 15 || -15}
	// action === {type: 'change_red', payload: 15} // this is as per community convention but can be used anything like we used above.
	switch(action.colorToChange){
		case 'red':
			return state.red + action.amount > 255 || state.red + action.amount < 0
			? state
			: {...state, red: state.red + action.amount}
			// { red: 0, green: 0, blue: 0, red: state.red + action.amount };
		case 'green':
			return state.green + action.amount > 255 || state.green + action.amount < 0
			? state
			: {...state, green: state.green + action.amount}
		case 'blue':
			return state.blue + action.amount > 255 || state.blue + action.amount < 0
			? state
			: {...state, blue: state.blue + action.amount}
		default:
			return state;

	}
}

const SquareReducerScreen = () => {
	// const initialState = {red: 0, green: 0, blue: 0};
	// const [state, dispatch] = useReducer(reducer, initialState)
	const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
	// dispatch == run my reducer

	const {red, green, blue} = state;
	// console.log(state);

	return (
		<View>
			<ColorCounter 
				onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_INC})} 
				onDecrease={() => dispatch({colorToChange: 'red', amount: -1 * COLOR_INC})} 
				color="Red" />
			<ColorCounter 
				onIncrease={() => dispatch({colorToChange: 'green', amount: COLOR_INC})} 
				onDecrease={() => dispatch({colorToChange: 'green', amount: -1 * COLOR_INC})} 
				color="Green" />
			<ColorCounter 
				onIncrease={() => dispatch({colorToChange: 'blue', amount: COLOR_INC})} 
				onDecrease={() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_INC})} 
				color="Blue" />
			<View style={{ width: 100, height: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />
		</View>
	)
}

export default SquareReducerScreen;