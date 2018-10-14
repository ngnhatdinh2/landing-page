import React, { Component } from 'react';
import Navigator from './components/Navigator/Navigator';
import SkillBars from './components/SkillBars/SkillBars'; 
import Particles from 'react-particles-js';
import params from './particlesjs-config.js';
import fbIcon from './fb.png';
import ghIcon from './gh.png';
import './App.css';	
import tachyons from 'tachyons';
// import './animate.min.css';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Particles params={params} className="particles"/>
          <Navigator />
          <div className="main session1">
            <h1> Hi, I'm Dinh </h1>
            <h2> I build Web, and I'm new here </h2>
            <div className="icon-container">
              <a href="https://github.com/ngnhatdinh2"> <img className="grow" src={fbIcon} alt="fb Logo"/> </a>
              <a href="https://www.facebook.com/nowyouareseeingmyprofile"> <img className="grow" src={ghIcon} alt="gh Logo"/> </a>
            </div>
          </div>
          <div className="main session2" id="about">
            <h2> Lorem </h2>
            <p>Why do we use it?
              It is a <span>long established fact</span> that a reader will be distracted
              by the readable content of a page when looking at its layout. 
              The point of using <span>Lorem Ipsum</span> is that it has a more-or-less
              normal distribution of letters, as opposed to using '<span>Content</span> 
              here, content here', making it look like readable English. <span>Many desktop</span>
              publishing packages and web page editors now use Lorem Ipsum as their default
              model text, and a search for <span>'lorem ipsum'</span> will uncover many web sites
              still in their infancy. <span>Various</span> versions have evolved over the years, sometimes
              by accident, sometimes on purpose (injected humour and the like). 
            </p>
          </div>
          <SkillBars id="skill"/>
      </div>  
    );
  }
}

export default App;
