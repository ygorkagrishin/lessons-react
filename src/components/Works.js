import React from 'react';

class Works extends React.Component {
  
  workList = [
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
      <div className="work-row">
        {this.workList.map((item) => 
          <div className="work-col">
            <figure>
              <img src={item.img} alt="work pic"/>
              <figcaption>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </figcaption>
            </figure>  
          </div>
        )}
      </div>     
    )
  }
}

export default Works;