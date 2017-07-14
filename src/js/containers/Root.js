import '../../styles/app.scss'
import '../../styles/font-awesome/css/font-awesome.min.scss'

import React, { Component } from 'react'
import routes from '../routes'
import { Router } from 'react-router'

export default class Root extends Component {
  render() {
    const { history } = this.props;
    return (
      <Router history={history} routes={routes} />
    )
  }
}