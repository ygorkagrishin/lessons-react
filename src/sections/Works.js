import React from 'react';
import HeaderSection from '../components/HeaderSection';

class Works extends React.Component {
  
  header = {
    title: `Our works`,
    subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Praesent vitae eros eget tellus tristique bibendum. 
               Donec rutrum sed sem quis venenatis.`
  }

  content = [
    {
      img: 'img/content/work/.png', 
      title: 'Fully Responsive', 
      text: 'Design / Branding'
    },
    {
      img: 'img/content/work/.png', 
      title: 'Font Awesome Icons', 
      text: 'Design / Branding'
    },
    {
      img: 'img/content/work/.png', 
      title: 'HTML5 &amp; CSS3', 
      text: 'Design / Branding'},
    {
      img: 'img/content/work/.png', 
      title: 'Various Layouts', 
      text: 'Design / Branding'
    },
    {
      img: 'img/content/work/.png', 
      title: 'Fully Responsive', 
      text: 'Design / Branding'
    },
    {
      img: 'img/content/work/.png', 
      title: 'Font Awesome Icons', 
      text: 'Design / Branding'
    },
    {
      img: 'img/content/work/.png', 
      title: 'HTML5 &amp; CSS3', 
      text: 'Design / Branding'
    },
    {
      img: 'img/content/work/.png', 
      title: 'Various Layouts', 
      text: 'Design / Branding'
    }
  ]
  
  render() {
    return (
 
      <section className="work section">
        <div className="container">
        
          <HeaderSection title={this.header.title} subtitle={this.header.subtitle}/>
          
          <div className="work-row section-content">
          {
            this.content.map((column) => 
              <div className="work-column bug-fix-ie">
                <div className="work-column-content">
                  <div className="work-pic-container">
                    <img src={column.img} alt="work pic"/>
                  </div>
                  <div className="work-description">
                    <h3 className="work-name-column">{column.title}</h3>
                    <p>{column.text}</p>
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

export default Works;