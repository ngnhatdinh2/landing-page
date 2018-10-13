import React from 'react';
import './Navigator.css';
const Navigator = (props) =>{
	const {colorTheme} = props;
	return(
		<div className="Navigator">
			<div id="magic-click">
				<img src="http://simpleicon.com/wp-content/uploads/magic.png" alt="magic-icon" />
				<div>CLick Me</div>
			</div>
			<div id="left-menu">
				<a href="#first" className="Menu-Item">Number 1</a>
				<a href="#second" className="Menu-Item">Number 2</a>
				<a href="#third" className="Menu-Item" >Number 3</a>
			</div>
		</div>
	);
}
export default Navigator;