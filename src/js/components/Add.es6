import React from 'react';
import MainActions from '../actions/actions.js'

// The button to add a product 
class Add extends React.Component {

	render() {
		var Handler = () => {
			// the props are passed in from the parent class
			MainActions.add(this.props.item);
		};
		return <button onClick={Handler}> Buy this </button>;
	};
};

module.exports = Add; 
