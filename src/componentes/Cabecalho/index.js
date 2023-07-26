import React from 'react'
import styles from './Cabecalho.module.css'

export default function  Cabecalho(props) {
  return (
    <>
    <div className={styles.cabecalho}>
      <img className={styles.logo} src={props.logo}/>
        <p className={styles.titulo}>{props.titulo}</p>
        <p className={`${styles.subtitulo} ${styles.subtitulo}$`} > {props.subtitulo} </p>
        <div>
    <header>
      <nav>
        <ul className="menu">
          <li><a href="#">Início</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
   
  </div>
       

       </div>
   </>

  

  )
}
