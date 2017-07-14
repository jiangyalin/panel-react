import {AppContainer} from 'react-hot-loader' // 热更替
import React from 'react'
import {render} from 'react-dom'
import { browserHistory } from 'react-router'
import Root from './containers/Root' // 组件
import Redbox from 'redbox-react' // 路由管理
const rootEl = document.getElementById('app');

render(
  <AppContainer errorReporter={Redbox}>
    <Root history={browserHistory} />
  </AppContainer>,
  rootEl
);