import React from 'react'
import { Link } from 'react-router'
import styles from './index.scss'

const PixivTitle = ({data}) => {
  return (
    <div className={styles.box}>
      <div className={styles.btn}>
        <i className='fa fa-bars'></i>
      </div>
      <span className={styles.tt}>主页</span>
      <div className={styles.nav}>
        <ul className={styles.lst}>
          <li className={styles.li+' '+styles.active}>
            <Link>
              <i className={'fa fa-home '+styles.fa}></i>
              <span className={styles.sn}>主页</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link>
              <i className={'fa fa-lemon-o '+styles.fa}></i>
              <span className={styles.sn}>最新</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link>
              <i className={'fa fa-search '+styles.fa}></i>
              <span className={styles.sn}>搜索</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default PixivTitle