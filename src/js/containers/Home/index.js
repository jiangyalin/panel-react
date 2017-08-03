import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Panel,
  Timer
} from '../../components'

class Home extends Component {
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
    const { state } = this.props;
    return (
      <div className="box">
        <Timer {...state} userInfo={userInfo} />l
        <Panel {...state} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state: state.timer
});

export default connect(
  mapStateToProps
)(Home)