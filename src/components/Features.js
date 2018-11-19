import React from 'react';

class Features extends React.Component {
  
  grid = [
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
  
    <div className="features-row">
      {this.grid.map((column) => 
        <div className="features-column bug-fix-ie">
          <div className="features-column-content">
            <div className="features-pic-container">
              <img src={column.src} alt="features pic"/>
            </div>
            <div className="features-description">
              <h3 className="features-title-column">{column.title}</h3>
              <p>{column.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>

    )
  }
}

export default Features;