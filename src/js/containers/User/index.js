import React, { Component } from 'react'
import { UserInfo } from '../../components'

export default class User extends Component {
  state = {
    userInfo: {
      name: '一方通行2',
      Email: '18725944157@163.com',
      telephone: '18725944157'
    }
  };
  render() {
    const { userInfo } = this.state;
    return (
      <div>
        <UserInfo data={userInfo} />
      </div>
    )
  }
}