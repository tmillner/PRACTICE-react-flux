import React from 'react';

export default class Template extends React.Component {
	render() {
		return (<div id='page'> 
			{this.props.children}
		</div>);
	};
};
//module.exports = Template; 
