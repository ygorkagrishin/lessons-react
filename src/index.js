import React from 'react';
import ReactDOM from 'react-dom';

import Hero from './sections/Hero';
import Features from './sections/Features';
import Works from './sections/Works';
import Team from './sections/Team';

class MyApp extends React.Component {
  render() {
    return (
      <div className="page-wrapper">
        <Hero />
        <Features />
        <Works />
        <Team />
      </div>    
    )
  }
};

ReactDOM.render(<MyApp />, document.getElementById('root'));