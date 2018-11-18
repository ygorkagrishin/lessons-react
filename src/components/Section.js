import React from 'react';

import HeaderSection from './HeaderSection';

class Section extends React.Component {
  render() {
    return (

      <section className={`${this.props.name} section`}>
        <div className="container">
          <HeaderSection /> 

          {this.props.children}

        </div>
      </section>

    )
  }
};

export default Section;