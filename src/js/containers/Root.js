import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from '../routes' // 路由

import '../../styles/app.scss'
import '../../styles/font-awesome/css/font-awesome.min.scss'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

export default Root