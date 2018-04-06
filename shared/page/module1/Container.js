import React, { Component as C } from 'react';
import connect from 'funsee/connect';
import * as actions from './action';
import * as commonAction from '../../common/action';
import * as style from './style.scss';

class Module1 extends C {
  static pageInit() {
    return () => actions.zxAction(123);
  }

  componentDidMount() {
    this.props.zxTest();
    this.props.loadEnv();
  }

  onclick() {
    this.props.history.push('/module2');
  }

  render() {
    const { props } = this;
    return (
      <div>
        hellow 1112223
        <div className={style.great} onClick={this.onclick.bind(this)}>
          {props.test}
        </div>
      </div>
    );
  }
}
Module1.pageTitle = '测试页面';

export default connect(state => ({
  test: state.module.module1.zxText
}), {
  zxTest: actions.zxAction,
  loadEnv: commonAction.loadEnv
})(Module1);
