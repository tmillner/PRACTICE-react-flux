import React from 'react';
import MainActions from '../actions/actions.js'

// The button to increase the quanty of an item
class Increase extends React.Component {
	render() {
		return <Button {...this.props}/>
	};
};

const Button = (props) => {
	var Handler = () => {
		// NO CLUE WHY OR HOW THAT ARG IS KNOWN... (From actions?)
		MainActions.increase(props.index);
	};

	return <button onClick={Handler}> + </button>;
};

module.exports = Increase; 
