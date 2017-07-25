import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './index.scss'

class PanelMenu extends Component {
  render() {
    const {path, title, option} = this.props
    return (
      <Link to={path}>
        <div className={styles.box}>
          <div className={styles.imgGroup}>
            <img className={option == "true" ? styles.user : styles.img} src="../../../../images/user/user-01.png" />
          </div>
          <div className={styles.title}>
            <h2 className={styles.text}>{title}</h2>
          </div>
        </div>
      </Link>
    )
  }
}

export default PanelMenu