import React, { Component as C } from 'react';

import './reset.scss';

class Layout extends C {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <div>{this.props.children}</div>
      </section>
    );
  }
}

export default Layout;
