import React from 'react';
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import styles from './styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.main}>
            <a href='https://wa.me/5522992433187' target='blank' className={styles.link}>
                <div className={styles.footerItem}>
                    <div className={styles.footerIcon}>
                        <p className={styles.icon}>n</p>
                    </div>
                </div>
            </a>
            <a href='https://www.linkedin.com/in/eliel-psoares/' target='blank' className={styles.link}>
                <div className={styles.footerItem}>
                    <div className={styles.footerIcon}>
                        <p className={styles.icon}>i</p>
                    </div>
                </div>
            </a>
            <a href='mailto:epstere@gmail.com' className={styles.link}>
                <div className={styles.footerItem}>
                    <div className={styles.footerIcon}>
                        <p className={styles.icon}>u</p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Footer;
