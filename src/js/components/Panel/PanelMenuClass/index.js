import React from 'react'
import styles from './index.scss'

const PanelMenuClass = ({title}) => {
  return (
    <div className={styles.box}>
      {title}
    </div>
  )
};

export default PanelMenuClass