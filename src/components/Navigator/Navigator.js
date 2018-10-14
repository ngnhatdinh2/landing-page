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
				<a href="#about" className="Menu-Item">About</a>
				<a href="#skill" className="Menu-Item">Skills</a>
			</div>
		</div>
	);
}
export default Navigator;