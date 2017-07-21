import React from 'react'
import styles from './index.scss'

const UserInfo = ({data}) => {
  return (
    <div className={styles.box}>
      <div className={styles.imgGroup}>
        <img className={styles.user} src="../../../images/user/user-01.png" />
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>{data.name}</h2>
        <p className={styles.text}>{data.Email}</p>
        <p className={styles.text}>{data.telephone}</p>
      </div>
    </div>
  )
};

export default UserInfo