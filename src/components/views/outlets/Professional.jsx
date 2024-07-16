import React from 'react'
import styles from "./styles/Professional.module.css"

const Professional = () => {
    return (
        <div className={styles.main} >
            <div className={styles.section_group}>
                <div className={styles.section} >
                    <div className={styles.personalInfo}>
                        <p className={styles.paragraph_header}>Projetos Relevantes</p>
                        <p className={styles.content_line}><strong>www.deelite.com.br </strong> - Um site quase estático, se não pela área administrativa onde o proprietário altera as informações que serão exibidas. Apresenta-se como um portifólio de eventos esportivos.
                        </p>
                        <p className={styles.content_line}><strong>Confidencial </strong> - Protegido por sigilo de contrato até a sua publicação oficial, é um complexo sitema de venda online voltado para o segmento esportivo e de eventos
                        </p>
                    </div>
                </div>
                <div className={styles.section} >
                    <div className={styles.personalInfo}>
                        <p className={styles.paragraph_header}>Conhecimentos Técnicos</p>
                        <p className={styles.content_line}>ReactJs, Node</p>
                        <p className={styles.content_line}>Javascript</p>
                        <p className={styles.content_line}>Mongo, SQL</p>
                        <p className={styles.content_line}>HTML, CSS</p>
                        <p className={styles.content_line}>Git, Github</p>
                        <p className={styles.content_line}>Deployment</p>
                    </div>
                </div>
            </div>
            <div className={styles.section}  >
                <div className={styles.personalInfo}>
                    <p className={styles.paragraph_header}>Experiência Profisional</p>
                    <p className={styles.content_line}><strong>Militar do Exército Brasileiro (2012 - 2022): </strong>
                        Além das atividades triviais da vida aquartelada, exercia a função de cabo aux de comunicações, na divisão de informática de minha Unidade. Lançava fios e cabos de fibra, planejava e estruturava redes locais de menor complexidade. Além disso, executava manutenção diária dos mais de 650 computadores que tínhamos sob nossa responsabilidade.
                    </p>
                    <p className={styles.content_line}><strong>Recepcionista em Hotel Royal Regency (2022-2023): </strong>
                        Especial familiaridade com sistemas de gerenciamento, como PC-System e Facility, além de uma excelente capacidade de comunicação.
                    </p>
                    <p className={styles.content_line}><strong>Programador Freelancer (2024): </strong>
                        Embora esteja entrando calmamente no mercado, tenho dois projetos publicados, sendo um deles um complexo sistema de venda online.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Professional