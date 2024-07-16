import React from 'react'
import styles from "./styles/Education.module.css"

const Education = () => {
    return (
        <div className={styles.main} >
            <div className={styles.section_group}>
                <div className={styles.section}>
                    <div className={styles.personalInfo}>
                        <p className={styles.paragraph_header}>Educação Formal</p>
                        <p className={styles.content_line}><strong>E. M. Alcino Francisco da Silva</strong> - Fundamental (2008)</p>
                        <p className={styles.content_line}><strong>C. E. Higino da Silveira</strong> - Médio (2010)</p>
                        <p className={styles.content_line}><strong>Universidade Estácio de Sá</strong> - Superior (2024)</p>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.personalInfo}>
                        <p className={styles.paragraph_header}>Cursos</p>
                        <p className={styles.content_line}>Análise e Melhoria de Processos (Exército Brasileiro - 2016)</p>
                    </div>
                </div>
            </div>
            <div className={styles.section} style={{ width: '100%' }} >
                <div className={styles.personalInfo}>
                    <p className={styles.paragraph_header}>Demais Habilidades e Conhecimentos</p>
                    <p className={styles.content_line}>Inglês avançado</p>
                    <p className={styles.content_line}>Excel Intermediário</p>
                    <p className={styles.content_line}>Informática Avançada</p>
                    <p className={styles.content_line}>Web Design (
                        <a style={{color:'#000', textDecoration:'underline'}} target='blank' href='https://drive.google.com/file/d/1hV91Y_pBuUgv-q1UJ94GMqh3AzozQjCV/view?usp=drive_link'>certificado Hackerrank</a>)</p>
                    <p className={styles.content_line}>Programação</p>
                </div>
            </div>
        </div>
    )
}

export default Education