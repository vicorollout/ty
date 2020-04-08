import React from 'react';
import tyLogo from './assets/ty-logo-white.png';
import tyIg from './assets/ig-logo.png';
import tySc from './assets/sc-logo.png';
import tyBg from './assets/tyler-photo-web.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-background">
          <div className="ty-bg-wrapper">
            <div className="ty-bg-inner">
              <img src={tyBg} className="ty-bg" alt="logo" />  
              <img src={tyLogo} className="ty-logo" alt="logo" />
            </div>
          </div>

          <div className="ty-social-wrapper">            
            <a 
              href ="//instagram.com/_tyleryoung_/" 
              alt="Tyler Young - Instagram" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img className="ty-ig ty-socials" src={tyIg} alt="Tyler Young - Instagram" />
            </a>

            <a 
              href ="//soundcloud.com/tyleryoungofficial" 
              alt="Tyler Young - SoundCloud" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img className="ty-sc ty-socials" src={tySc} alt="Tyler Young - SoundCloud" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
