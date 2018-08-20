import React, {Component} from 'react'; 

import Filter from './Filter'; 
import Image from './Image'; 

export default class FilterList extends Component{
	state = { 
		text: '',
	}; 
	selectBox =() =>{
		this.props.selectBox(this.props.row, this.props.col)
	};
	
	render() {

		return(
			<div className='filterList'>
				<div className='filterone'>
					<Filter 
						name='noir'
						settings={{contrast: 138, hue: 0, brightness: 122, saturate: 0, sepia: 0}}
						selected={this.props.selectedFilter === 'noir'}
						clicked={this.props.updateSettings} 
					>
						<Image src={this.props.image}/>
					</Filter>
				</div>
				<div className='filterone'>
					<Filter 
						name='aged'
						settings={{contrast: 94, hue: -54, brightness: 92, saturate: 100, sepia: 44}}
						selected={this.props.selectedFilter === 'aged'}
						clicked={this.props.updateSettings} 
					>
						<Image src={this.props.image}/>
					</Filter>
				</div>
				<div className='filterone'>
					<Filter 
						name='vintage'
						settings={{contrast: 164, hue: 0, brightness: 47, saturate: 0, sepia: 100}}
						selected={this.props.selectedFilter === 'vintage'}
						clicked={this.props.updateSettings} 
					>
						<Image src={this.props.image}/>
					</Filter>
					
				</div>
			</div>
		);
	}
}

