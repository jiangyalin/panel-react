import React from 'react'
import styles from './index.scss'

const PanelMenu = ({text, option}) => {
  return (
    <div className={styles.box}>
      <div className={styles.imgGroup}>
        <img className={option == "true" ? styles.user : styles.img} src="../../../../images/user/user-01.png" />
      </div>
      <div className={styles.title}>
        <h2 className={styles.text}>{text}</h2>
      </div>
    </div>
  )
};

export default PanelMenu