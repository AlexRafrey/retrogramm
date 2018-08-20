import React, {Component} from 'react';

function getFilterCSSStyles(settings) { 
	let filterString = '';
	for (const prop in settings) {
		if (settings.hasOwnProperty(prop)) {
			switch (prop) {
				case 'hue':
					filterString += 'hue-rotate('+settings[prop] + 'deg)';
					break;
			
				default:
					filterString += prop + '(' + settings[prop] + '%)';
					break;
			}
		}
	}
	return filterString;
}

export default function Filter({children, name, settings, selected, clicked = () => {}})  {
	const filter = getFilterCSSStyles(settings);
	const style =  { filter };
	const className =  `filter${selected ? 'selected' : ''}`;
// clicked(name, settings) - передаем параметры в updateSettings
	return(
		<div className={className} onClick={ ()=> clicked(name, settings)}>
			<div className='image-container' style={style}>
				{children} 
			</div>
		</div>
	); 
}

