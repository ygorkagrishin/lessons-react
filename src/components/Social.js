import React from 'react';

class Social extends React.Component {
  render() {
    return (
      <ul className="social">
        {this.props.social.map((obj) =>
          <li>
            <a href={obj.href}>
              <img src={obj.src} alt="social pic"/>
            </a>
          </li>
        )}
      </ul>
    )
  }
}
 
export default Social;