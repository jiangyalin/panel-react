import React, { Component } from 'react'
import {
  Panel
} from '../../components'

export default class App extends Component {
  state = {
    userInfo: {
      name: '一方通行'
    },
    flagItem: [
      {
        title: '星标项目1',
        path: '/user'
      },{
        title: '相册',
        path: '/illustration'
      }
    ],
    otherProject: [
      {
        title: '其他项目1',
        path: '/user'
      },{
        title: '其他项目2',
        path: '/user'
      }
    ]
  };
  render() {
    const { userInfo, flagItem, otherProject } = this.state;
    return (
      <div className="box">
        <Panel userInfo={userInfo} flagItem={flagItem} otherProject={otherProject} />
      </div>
    )
  }
}