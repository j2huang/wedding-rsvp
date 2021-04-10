import './App.css';
import Invitations from './Invitations.js';

import header from './images/header.png';
import logo from './images/logo.png';
import valentine from './images/valentine.png';
import downchevron from './images/chevron-down.png';

import FadeIn from 'react-fade-in';

import React from 'react';

interface IHooksHOCProps {
  width: number;
}

class App extends React.Component<IHooksHOCProps> {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="App">
        <div id="slide0">
          <header>
            <FadeIn 
              delay="200"
              transitionDuration="1200"
              >
              <div>
                <img src={header} alt="header" />
              </div>
              <div>
                <img src={logo} alt="logo" />
              </div>
              <div>
                <img src={valentine} alt="valentine" />
              </div>
            </FadeIn>
          </header>
          <div className="Banner">
            <FadeIn 
              delay="1200"
              transitionDuration="1000"
              >
              <p>You’re at the right place. Keep scrolling to RSVP.</p>
            </FadeIn>
            <FadeIn 
              delay="1700"
              transitionDuration="800"
              >
              <div>
                <a href="#slide1">
                  <img src={downchevron} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        <div id="slide1">
          <Invitations />
        </div>

      </div>

    );
  }
}

// export default withHooksHOC(App);
export default App;
