import React from 'react'
import styles from "./styles/Home.module.css"

const Home = () => {
  return (
    <div className={styles.main} >
      <div className={styles.section_group}>
        <div className={styles.section} >
          <div className={styles.personalInfo}>
            <p className={styles.paragraph_header}>Informações Pessoais</p>
            <p className={styles.content_line}>Eliel Pereira Soares</p>
            <p className={styles.content_line}>31</p>
            <p className={styles.content_line}>Programador</p>
            <p className={styles.content_line}>epstere@gmail.com</p>
            <p className={styles.content_line}>22 992433187</p>
            <p className={styles.content_line}>Fazendinha, Araruama - RJ</p>
          </div>
        </div>
        <div className={styles.section} >
          <div className={styles.interests}>
            <p className={styles.paragraph_header}>Hobbies e Interesses</p>
            <p className={styles.content_line}>Ler</p>
            <p className={styles.content_line}>Aprender</p>
            <p className={styles.content_line}>Pesquisar</p>
            <p className={styles.content_line}>Programar</p>
          </div>
        </div>
      </div>
      <div className={styles.section} >
        <div className={styles.targets}>
          <p className={styles.paragraph_header}>Objetivos</p>
          <p className={styles.content_line}> Como um profissional movido pela curiosidade incessante por novidades e dados históricos, meu objetivo é construir uma carreira de legado, marcada por feitos que possam ser lembrados e uma paixão por conhecimento infinito.<br />
            Busco uma posição que me permita explorar constantemente novas fronteiras do conhecimento e contribuir de maneira significativa para o desenvolvimento da organização, sempre com o propósito de ser lembrado não apenas pelo impacto dos meus resultados, mas também pelo meu comprometimento contínuo com o aprendizado e a inovação.</p>
        </div>
      </div>
    </div>
  )
}

export default Home