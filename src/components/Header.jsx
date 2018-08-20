import React, {Component} from 'react';
// import { Button } from 'react-bootstrap';

export default class Header extends Component{
	state = {
		time: '',
	};

	counter  =({ }) =>{
	 
	};
	render() {

		return(
			<div>
				<header>
					<h1>{this.props.title}</h1>
				</header>
			</div>
		);
	}
}

