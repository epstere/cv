import React from "react";
import styles from "./styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.section_group}>
        <div className={styles.section}>
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
        <div className={styles.section}>
          <div className={styles.interests}>
            <p className={styles.paragraph_header}>Hobbies e Interesses</p>
            <p className={styles.content_line}>Ler</p>
            <p className={styles.content_line}>Aprender</p>
            <p className={styles.content_line}>Pesquisar</p>
            <p className={styles.content_line}>Programar</p>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.targets}>
          <p className={styles.paragraph_header}>Objetivos</p>
          <p className={styles.content_line}>
            Com 10+ anos de experiência, sou um profissional movido pela
            curiosidade por novidades e pelo conteúdo histórico da empresa,
            entendo que isso revela muito para onde se quer ir. Tenho paixão por
            conhecimento infinito, estou sempre buscando explorar novas
            fronteiras. Possuo excelente capacidade de comunicação e me
            considero plural. Atualmente cursando pós-graduação em Direito
            Digital na UVA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
