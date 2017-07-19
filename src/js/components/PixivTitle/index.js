import React from 'react'
import styles from './index.scss'

const PanelMenu = ({data}) => {
    return (
        <div className={styles.box}>
            <div className={styles.btn}>
                <i className='fa fa-bars'></i>
            </div>
        </div>
    )
};

export default PanelMenu