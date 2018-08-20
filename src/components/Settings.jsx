import React, {Component} from 'react'; 

import Range from './Range'; 

export default class Settings extends Component{
	state = { 
		text: '',
	}; 
	selectBox =() =>{
		this.props.selectBox(this.props.row, this.props.col)
	};
	
	render() {
		const {contrast, hue, brightness, saturate, sepia} = this.props.settings;
		return(
			<div> 
				<Range 
					name='contrast'
					value={contrast}
					min={0}
					max={200}
					handleChange={this.props.handleChange}
				/>
				<Range 
					name='hue'
					value={hue}
					min={-360}
					max={360}
					handleChange={this.props.handleChange}
				/>
				<Range 
					name='brightness'
					value={brightness}
					min={0}
					max={200}
					handleChange={this.props.handleChange}
				/>
				<Range 
					name='saturate'
					value={saturate}
					min={0}
					max={100}
					handleChange={this.props.handleChange}
				/>
				<Range 
					name='sepia'
					value={ sepia}
					min={0}
					max={100}
					handleChange={this.props.handleChange}
				/>
			</div>
		);
	}
}

