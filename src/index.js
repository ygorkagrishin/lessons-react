import React from 'react';
import ReactDOM from 'react-dom';

import Section from './components/Section';

import Works from './components/Works';

class MyApp extends React.Component {
  render() {
    return (
      <div className="wrapper">
        
        <Section name="work">
          <Works />
        </Section>

      </div>    
    )
  }
};

ReactDOM.render(<MyApp />, document.getElementById('root'));