import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './index.scss'

export default class NavLink extends Component {
  render() {
    const { path, text, active } = this.props;
    return (
      <Link activeClassName={active} className={styles.box} to={path}>
        <span className={styles.text+' '+styles.active}>{text}</span>
      </Link>
    )
  }
}