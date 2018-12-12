import React from 'react';

import Header from '../components/Header';

class Hero extends React.Component {
  render() {
    return (
      <section className="hero section">
        <div className="container">
        
          <Header />

          <div className="hero-content">
            <h2 className="title-hero">Inspire your inspiration</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Praesent vitae eros eget tellus tristique bibendum. 
            Donec rutrum sed sem quis venenatis.</p>

            <a href="#" className="btn btn-type-transparent">Get start</a>
          </div>

          <button type="button" className="letsrock"></button>
        </div>
      </section>
    )
  };
};

export default Hero;