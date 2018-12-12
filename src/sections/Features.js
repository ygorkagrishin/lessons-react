import React from 'react';

import HeaderSection from '../components/HeaderSection';

class Features extends React.Component {
  
  header = {
    title: `Tinyone features`,
    subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Praesent vitae eros eget tellus tristique bibendum. 
               Donec rutrum sed sem quis venenatis.`
  }

  content = [
      {
        src: `img/content/features/.png`,
        title: `Fully Responsive`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent vitae eros eget tellus tristique bibendum.`
      }, 
      {
        src: `img/content/features/.png`,
        title: `Fully Layered PSD`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent vitae eros eget tellus tristique bibendum.`
      }, 
      {
        src: `img/content/features/.png`,
        title: `Font Awesome Icons`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent vitae eros eget tellus tristique bibendum.`
      }, 
      {
        src: `img/content/features/.png`,
        title: `HTML5 &amp; CSS3`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent vitae eros eget tellus tristique bibendum.`
      }, 
      {
        src: `img/content/features/.png`,
        title: `Email Template`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent vitae eros eget tellus tristique bibendum.`
      }, 
      {
        src: `img/content/features/.png`,
        title: `Free to download`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent vitae eros eget tellus tristique bibendum.`
      }
    ]
  
  render() {    
    return (
  
      <section className="features section">
        <div className="container">
          
          <HeaderSection title={this.header.title} subtitle={this.header.subtitle} />

          <div className="features-row section-content">
            {
              this.content.map((column) => 
                <div className="features-column bug-fix-ie">
                  <div className="features-column-content">
                    <div className="features-symb-container">
                      <img src={column.src} alt="features pic"/>
                    </div>
                    <div className="features-description">
                      <h3 className="features-title-column">{column.title}</h3>
                      <p>{column.description}</p>
                    </div>
                  </div>
                </div> 
              )
            }
          </div>

        </div>
      </section>
    )
  };
};

export default Features;