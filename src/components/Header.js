import React from 'react';

import Nav from './Navigator';
import Social from './Social';

class Header extends React.Component {
  
  social = [
    {
      'src': 'img/general/.png',
      'href': 'javascript:void(0);'
    },
    {
      'src': 'img/general/.png',
      'href': 'javascript:void(0);'
    },
    {
      'src': 'img/general/.png',
      'href': 'javascript:void(0);'
    },
    {
      'src': 'img/general/.png',
      'href': 'javascript:void(0);'
    }
  ]
  
  render() {
    return (
      
      <header>
        <div className='container'>
          
          <Nav />
          
          <div className='banner banner-header'>
            <img className='logo' src='img/general/.png' alt="logo"/>
            <h1 className="title-header">tinyone</h1>
          </div>

          <Social social= {this.social} />

        </div>
      </header>

    )
  }
}

export default Header;