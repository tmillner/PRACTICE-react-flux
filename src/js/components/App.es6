import React from 'react';
import MainActions from '../actions/actions.js'

class App extends React.Component {
	render() {
		return <Header color='red' txt='!你好世界!' />
	};
};

const Header = (props) => {
	var MouseOn = () => {
		MainActions.pause(" beethoven ");
	};

	var MouseOff = () => {
		MainActions.play("~~beethoven~~");
	};

	var c = props.color; // < Not inside jsx no need for {}
	return (<h1 style={{color : c}} 
				onMouseEnter={MouseOn}
				onMouseLeave={MouseOff}>
		{props.txt}
		</h1>
	);
};

/*
var App = React.createClass({
	render : function() {
		return <h1>你好世界!!!</h1>
	}
});
*/

// using export default App fails doesn't have bg
// es6 support, this is compatible though;
// module.exports.default = App;
module.exports = App; 
