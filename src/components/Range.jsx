import React, {Component} from 'react';
 
 
export default class Range extends Component{
	 
		 state = {
			array: '',
		};
		
	handleAddShow =(e)=>{ 
		return 12;
	};
 
	 
	render() { 

		return(
			<div className="range">
			  	<label htmlFor={this.props.name}>
				  	<p>{this.props.name}</p>
			  		<p>{this.props.value}</p>
				</label>
				<input
					type="range"
					id={this.props.name}
					value={this.props.value}
					step='1'
					min={this.props.min}
					max={this.props.max}
					onChange={this.props.handleChange}
				/> 
			</div>		
		);
	}
}

