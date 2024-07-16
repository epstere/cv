import React from 'react'
import styles from './styles/Home.module.css'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.profile}>
        <div className={styles.foto}>
          <div className={styles.moldura}>
            <img src="/imgs/eu.png" alt="" className={styles.imagem} />
          </div>
        </div>
      </div >
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div >
  )
}

export default Home