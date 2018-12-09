import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav className='main-navigator'>
        <div className='hamburger'>
          <img src='img/general/.png' alt='hamburger menu pic' />
        </div>

        <ul className='main-navigator-list'>
            <li>
              <a className='#features'>Features</a>
            </li>

            <li>
              <a className='#pricing'>Pricing</a>
            </li>

            <li>
              <a className='#works'Works></a>
            </li>

            <li>
              <a className='#team'>Team</a>
            </li>

            <li>
              <a className='#testimonial'>Testimonial</a>
            </li>

            <li>
              <a className='#contact'>Contact</a>
            </li>
          </ul>
      </nav>
    )
  }
}

export default Nav;