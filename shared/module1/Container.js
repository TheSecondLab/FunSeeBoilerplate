import React, { Component as C } from 'react';
import connect from 'funsee/connect';

// import * as saga from './saga';
import * as actions from './action';

class Module1 extends C {
  static pageInit() {
    return () => actions.zxAction(123);
  }

  componentDidMount() {
    this.props.zxTest();
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
Module1.pageTitle = '测试页面';

export default connect(state => ({
  test: state.module.module1.zxText
}), {
  zxTest: actions.zxAction
})(Module1);
