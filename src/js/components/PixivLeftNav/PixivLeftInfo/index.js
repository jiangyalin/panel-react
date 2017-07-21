import React, { Component } from 'react'
import styles from './index.scss'

export default class PixivLeftInfo extends Component {
  render() {
    return (
      <div className={styles.box}>
        <img className={styles.img} src="../../../../images/user/user-01.png" />
        <div className={styles.text}>
          <p className={styles.name}>一方通行</p>
          <p className={styles.name}>18725944157</p>
        </div>
      </div>
    )
  }
}