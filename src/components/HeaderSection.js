import React from 'react';

class HeaderSection extends React.Component {
  render() {
    return (

      <div className="header-section">
        <h2 className="title-section title">{this.props.title}</h2>
        <p>{this.props.subtitle}</p>
      </div>
      
    )
  }
};

export default HeaderSection;