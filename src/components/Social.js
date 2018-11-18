import React from 'react';

class Social extends React.Component {
  render() {
    return (
      <ul className="social">
        {this.props.social.map((item) =>
          <li>
            <a href={item.href}>
              <img src={item.src} alt="social pic"/>
            </a>
          </li>
        )}
      </ul>
    )
  }
}
 
export default Social;