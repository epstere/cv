import React from 'react'

import styles from './styles/Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.main}>
            <div className={styles.blur_background}>
                <Link to={'/'} className={styles.menuItem}>
                    <div className={styles.glass}>
                        <div className={styles.mirror}>.</div>
                    </div>Pessoal
                </Link>
                <Link to={'/professional'} className={styles.menuItem}>
                    <div className={styles.glass}>
                        <div className={styles.mirror}>.</div>
                    </div>Profissional
                </Link>
                <Link to={'/education'} className={styles.menuItem}>
                    <div className={styles.glass}>
                        <div className={styles.mirror}>.</div>
                    </div>Educação
                </Link>
            </div>
        </div >
    )
}

export default Header