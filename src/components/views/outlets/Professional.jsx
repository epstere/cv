import React from "react";
import styles from "./styles/Professional.module.css";

const Professional = () => {
  return (
    <div className={styles.main}>
      <div className={styles.section_group}>
        <div className={styles.section}>
          <div className={styles.personalInfo}>
            <p className={styles.paragraph_header}>Projetos Relevantes</p>
            <p className={styles.content_line}>
              <strong>www.deelite.com.br </strong> - Um site que permite que o
              gestor altere as informações que serão exibidas a cada evento que
              tenha interesse em divulgar.
            </p>
            <p className={styles.content_line}>
              <strong>Confidencial </strong> - atualmente em fase de
              finalização, no desenvolvimento de um complexo sistema de venda
              online voltado para o segmento esportivo e de eventos. Essa
              aplicação é demasiadamente sofisticada, porque foi criada uma
              solução própria de comunicação online com o banco, sem
              intermediários. Nesse momento ainda protegido por sigilo de
              contrato até a sua publicação oficial.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.personalInfo}>
            <p className={styles.paragraph_header}>Conhecimentos Técnicos</p>
            <p className={styles.content_line}>ReactJs, Node, Express</p>
            <p className={styles.content_line}>Javascript</p>
            <p className={styles.content_line}>Mongo, SQL</p>
            <p className={styles.content_line}>HTML, CSS</p>
            <p className={styles.content_line}>Git, Github</p>
            <p className={styles.content_line}>Deployment</p>
            <p className={styles.content_line}>API</p>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.personalInfo}>
          <p className={styles.paragraph_header}>Experiência Profissional</p>
          <p className={styles.content_line}>
            <strong>Militar do Exército Brasileiro (2012 - 2022): </strong>
            Embora não tenha muito projetos grandes, mas me sinto entrando no
            mercado de programação. Possuo dois projetos publicados, sendo um
            deles de um complexo sistema de venda online.
          </p>
          <p className={styles.content_line}>
            <strong>Recepcionista em Hotel Royal Regency (2022-2023): </strong>
            Atendimento ao cliente no checkin, checkout e outras demandas. Com
            esta experiência criei uma familiaridade com os sistemas de
            gerenciamento, tais como; PC-System e Facility.
          </p>
          <p className={styles.content_line}>
            <strong>Programador Freelancer (2024): </strong>
            Embora não tenha muito projetos grandes, mas me sinto entrando no
            mercado de programação. Possuo dois projetos publicados, sendo um
            deles de um complexo sistema de venda online.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Professional;
