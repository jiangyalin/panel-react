import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Nav, PixivTitle, PixivLeftNav } from '../../components'
// import * as CounterActions from '../../actions/CounterActions'

class Illustration extends Component {
  state = {
    userInfo: {
      name: '一方通行3',
      Email: '18725944157@163.com',
      telephone: '18725944157'
    }
  };
  render() {
    const { state, actions } = this.state;
    return (
      <div>
        <PixivLeftNav {...state} {...actions} />
        <PixivTitle />
        <Nav />
      </div>
    )
  }
}

const select = state => ({
    state: state.illustration
})

export default connect(select)(Illustration)