// 路由管理
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {
  App,
  Home,
  User,
  Illustration
} from './containers'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="user">
      <IndexRoute component={User} />
    </Route>
    <Route path="illustration">
      <IndexRoute component={Illustration} />
    </Route>
  </Route>
);