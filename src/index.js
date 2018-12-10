import React from 'react';
import ReactDOM from 'react-dom';

import Section from './components/Section';

import Features from './sections/Features';
import Works from './sections/Works';
import Team from './sections/Team';

class MyApp extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Section name="features">
          <Features />
        </Section>

        <Section name="work">
          <Works />
        </Section>

        <Section name="team">
          <Team />
        </Section>
      </div>    
    )
  }
};

ReactDOM.render(<MyApp />, document.getElementById('root'));