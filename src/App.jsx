import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom'; 
import axios from 'axios';

import Header from './components/Header';
import Settings from './components/Settings';
import Filter from './components/Filter';
import Image from './components/Image';
import FilterList from './components/FilterList';
 
// onClick={(e)=>this.done_item(item['id'], e)} 
// this.setState(state => ({isModal: !state.isModal}));
 
export default class App extends Component{
	state = { 
		image: 'https://i.ytimg.com/vi/iqdRh9IpJ6I/maxresdefault.jpg',
		selectedFilter: '', //отслеживаем выбранный фильтр
		settings: {
			contrast: 100,
			hue: 0, //оттенок
			brightness: 100, //яркость
			saturate: 100, //насыщенность
			sepia:0,
		}
	}   

	handleChange = (e) =>{
		const id = e.target.id;
		const value = e.target.value;
		const settings = {...this.state.settings, [id]: value }; //создаём новый объект и заменяем свойство 

		this.setState({selectedFilter: '', settings})
	}  
	updateSettings = (selectedFilter,  settings) => {
		console.log(selectedFilter);
		this.setState({selectedFilter, settings})
	}  

	render(){	
		 const {image, selectedFilter, settings} = this.state;
		return(
			<div className="app" >
			 	<Header title='Restagram'></Header>
				<section className='content'>
					<Settings settings={settings} handleChange={this.handleChange}></Settings>
					<main>
						<Filter settings={settings}>
							<Image src={image}></Image>
						</Filter>
						<FilterList
							image={image}
							settings={settings}
							selectedFilter={selectedFilter}
							updateSettings={this.updateSettings}
						/>
					</main>
				</section>
		 	</div> 
		);
	}
}
