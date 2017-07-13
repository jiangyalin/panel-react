import React from 'react'
import styles from './index.scss'

const PanelMenu = ({title}) => {
  return (
    <div className={styles.box}>
      {title}
    </div>
  )
};

export default PanelMenu