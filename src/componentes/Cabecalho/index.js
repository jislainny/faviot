import React from 'react'
import styles from './Cabecalho.module.css'

export default function  Cabecalho(props) {
  return (
    <>
    <div className={styles.cabecalho}>
        <p className={styles.titulo}>{props.titulo}</p>
        <p className={`${styles.subtitulo} ${styles.subtitulo}$`} > {props.subtitulo} </p>
        <img src={props.logo}/>

       </div>
   </>

  

  )
}
