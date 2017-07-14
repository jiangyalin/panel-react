import React from 'react'
import styles from './index.scss'

const PanelMenu = ({text}) => {
  return (
    <div className={styles.box}>
      <div className={styles.imgGroup}>
        <img className={styles.user} src="../../../images/user/user-01.png" />
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>一方通行</h2>
        <p className={styles.text}>18725944157@163.com</p>
        <p className={styles.text}>18725944157</p>
      </div>
    </div>
  )
};

export default PanelMenu