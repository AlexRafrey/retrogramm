import React, {Component} from 'react';
 
 
export default class Image extends Component{
	 
		 state = {
			array: '',
		};
		
	handleAddShow =(e)=>{ 
		return 12;
	};
 
	 
	render() { 

		return(
			<div className='img'>
			  	<img src={this.props.src} alt=""/>
			</div>		
		);
	}
}

