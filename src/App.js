import React, { Component } from 'react';
import Navigator from './components/Navigator/Navigator';
import Particles from 'react-particles-js';
import params from './particlesjs-config.js';
import './App.css';	
class App extends Component {
  render() {
    return (
      <div className="App">
          <Particles params={params} className="particles"/>
          <Navigator />
          <div className="main">
            <h1> LOREM </h1>
            <h2> I build Web </h2>
            <p>Why do we use it?
              It is a long established fact that a reader will be distracted
               by the readable content of a page when looking at its layout. 
               The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content 
                here, content here', making it look like readable English. Many desktop
                 publishing packages and web page editors now use Lorem Ipsum as their default
                  model text, and a search for 'lorem ipsum' will uncover many web sites
                   still in their infancy. Various versions have evolved over the years, sometimes
                    by accident, sometimes on purpose (injected humour and the like). 
            </p>
          </div>
          
      </div>
    );
  }
}

export default App;
