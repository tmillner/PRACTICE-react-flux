import React from 'react';
import MainActions from '../actions/actions.js'

// The button to remove a product 
class Remove extends React.Component {
	render() {
		return <Button />
	};
};

const Button = (props) => {
	var Handler = () => {
		// NO CLUE WHY OR HOW THAT ARG IS KNOWN...
		MainActions.remove(props.index);
	};

	return <button onClick={Handler}> X </button>;
};

module.exports = Remove; 
