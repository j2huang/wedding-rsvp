import './App.css';
import Invitations from './Invitations.js';
import logo from './images/logo.png';
import valentine from './images/valentine.png';

import FadeIn from 'react-fade-in';

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <header>
            <FadeIn 
              transitionDuration="1000"
              >
              <div className="Header">
              </div>
            </FadeIn>
            <FadeIn 
              delay="500"
              transitionDuration="1000"
              >
              <div>
                <img src={logo} alt="logo" />
              </div>
            </FadeIn>
            <FadeIn 
              delay="800"
              transitionDuration="1000"
              >
              <div>
                <img src={valentine} alt="valentine" />
              </div>
            </FadeIn>
          </header>
          <div className="Banner">
            <FadeIn 
              delay="800"
              transitionDuration="800"
              >
              <p>
                We're getting married!<br/>
                Click the button below to RSVP.</p>
            </FadeIn>
            <FadeIn 
              delay="900"
              transitionDuration="800"
              >
                <br />
              <Invitations />
            </FadeIn>
          </div>
        </div>

      </div>

    );
  }
}
export default App;
