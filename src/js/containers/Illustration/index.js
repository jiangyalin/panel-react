import React, { Component } from 'react'
import { Nav, PixivTitle, PixivLeftNav } from '../../components'

export default class Illustration extends Component {
  state = {
    userInfo: {
      name: '一方通行3',
      Email: '18725944157@163.com',
      telephone: '18725944157'
    }
  };
  render() {
    const { userInfo } = this.state;
    return (
      <div>
        <PixivLeftNav />
        <PixivTitle />
        <Nav />
      </div>
    )
  }
}