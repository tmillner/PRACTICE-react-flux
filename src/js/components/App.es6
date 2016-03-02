import React from 'react';

class App extends React.Component {
	render() {
		return <h1>你好世界!!!</h1>
	};
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
module.exports = App; 

// module.exports.default = App;
// module.exports = App;
// module.exports = App;
