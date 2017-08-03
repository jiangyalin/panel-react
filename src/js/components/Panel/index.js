import React, { Component } from 'react'
import { Link } from 'react-router'
import PanelMenu from './PanelMenu'
import PanelAdd from './PanelAdd'
import PanelMenuClass from './PanelMenuClass'

class Panel extends Component {
  render() {
    const a = this.props
    const {userInfo} = this.props
    return (
      <div>pppppp
        {a.seconds}p{userInfo}kkk
      </div>
    )
  }
}

export default Panel;
