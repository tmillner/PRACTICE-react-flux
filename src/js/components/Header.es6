import React from 'react';
import {Link} from 'react-router-component';

export default class Header extends React.Component {
	render() {
		return (<div className='header clearfix'>
			<nav>
				<ul className="nav -nav-pills pull-right">
				<li><Link href='/cart' > 
					Cart: $5.00 (x items) 
				</Link></li>
				</ul>
			</nav>
		</div>);
	};
};
