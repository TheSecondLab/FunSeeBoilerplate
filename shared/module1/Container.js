import React from 'react';
import connect from '../../../FunSee/lib/tool/connector';


const Module1 = (props) => (
  <div>
    hellow 1112223
    {props.test}
  </div>
);

export default connect(state => {
  return {
    test: state.text
  };
})(Module1);
