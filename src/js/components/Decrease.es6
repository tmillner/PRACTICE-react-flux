import React from 'react';
import MainActions from '../actions/actions.js'

// The button to Decrease the quanty of an item
class Decrease extends React.Component {
	render() {
		return <Button />
	};
};

const Button = (props) => {
	var Handler = () => {
		// NO CLUE WHY OR HOW THAT ARG IS KNOWN... (From actions?)
		MainActions.decrease(props.index);
	};

	return <button onClick={Handler}> - </button>;
};

module.exports = Decrease; 
