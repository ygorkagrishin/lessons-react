import React from 'react';

import Social from '../components/Social';

class Team extends React.Component {
  
  team = [
    {
      src: 'img/content/team/.png',
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetum adipiscig elit',
      social: [{src: 'img/content/team/.png', href: 'https://www.facebook.com'}, 
      {src: 'img/content/team/.png', href: 'https://twitter.com'}, {src: 'img/content/team/.png', href: 'https://linkedin.com/'}]
    },
    {
      src: 'img/content/team/.png',
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetum adipiscig elit',
      social: [{src: 'img/content/team/.png', href: 'https://www.facebook.com'}, 
      {src: 'img/content/team/.png', href: 'https://twitter.com'}, {src: 'img/content/team/.png', href: 'https://linkedin.com/'}]
    },
    {
      src: 'img/content/team/.png',
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetum adipiscig elit',
      social: [{src: 'img/content/team/.png', href: 'https://www.facebook.com'}, 
      {src: 'img/content/team/.png', href: 'https://twitter.com'}, {src: 'img/content/team/.png', href: 'https://linkedin.com/'}]
    },
    {
      src: 'img/content/team/.png',
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetum adipiscig elit',
      social: [{src: 'img/content/team/.png', href: 'https://www.facebook.com'}, 
      {src: 'img/content/team/.png', href: 'https://twitter.com'}, {src: 'img/content/team/.png', href: 'https://linkedin.com/'}]
    }
  ]
  
  render() {
    return (
      <div className="team-row">
        {this.team.map((member) => 
          <div className="team-column bug-fix-ie">
            <figure className="team-member">
              <div className="team-pic-container">
                <img src={member.src} alt="member pic" />
              </div>
              <figcaption className="team-description">

                <h3 className="team-member-name">{ member.name }</h3>
                <p>{ member.description }</p>

                <Social social={ member.social }/>

              </figcaption>
            </figure>
          </div>
        )}
      </div>
    )
  }
}

export default Team;