import React from 'react';
import './SkillBars.css';
const SkillBar = ({name, rate}) =>{
	return(
		<div>
			<p>{name.toUpperCase()}</p>
			<div className="skill-container">
			  <div className="skills html">{rate}</div>
			</div>
		</div>
	)
}
const SkillBars =(props)=>{
	return(
		<div className="skill-bars">
			<h2> In My Very Subjective Evaluation </h2>
			<p>HTML</p>
			<div className="skill-container">
			  <div className="skills html">70%</div>
			</div>

			<p>CSS</p>
			<div className="skill-container">
			  <div className="skills css">30%</div>
			</div>

			<p>JavaScript</p>
			<div className="skill-container">
			  <div className="skills js">55%</div>
			</div>

			<p>React</p>
			<div className="skill-container">
			  <div className="skills react">60%</div>
			</div>
		</div>
	);
}
export default SkillBars;