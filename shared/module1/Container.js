import React, { Component as C } from 'react';
import connect from '../../../FunSee/lib/tool/connector';

import * as actions from './action';

class Module1 extends C {
  static good() {
    console.log('fighting');
  }

  render() {
    const { props } = this;
    return (
      <div>
        hellow 1112223
        {props.test}
      </div>
    );
  }
}

export default connect((state) => {
  console.log(state);
  return {
    test: state.module.module1.text
  };
})(Module1);
