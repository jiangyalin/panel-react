import React from 'react'
import NavLink from './NavLink'
import styles from './index.scss'

const Nav = () => {
  return (
    <div className={styles.box}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink path="/illustration" text="插画" active={styles.active}/>
        </li>
        <li className={styles.li}>
          <NavLink path="/illustration" text="小说" active={styles.active}/>
        </li>
        <li className={styles.li}>
          <NavLink path="/illustration" text="漫画" active={styles.active}/>
        </li>
      </ul>
    </div>
  )
};

export default Nav