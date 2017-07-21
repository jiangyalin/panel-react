import React from 'react'
import styles from './index.scss'

const PanelAdd = ({text}) => {
  return (
    <div className={styles.box}>
      <div className={styles.imgGroup}>
        <i className={'fa fa-plus '+styles.img}></i>
      </div>
      <div className={styles.title}>
        <h2 className={styles.text}>创建新项目2</h2>
      </div>
    </div>
  )
};

export default PanelAdd