import React from 'react'
import styles from './Cabecalho.module.css'

export default function  Cabecalho(props) {
  return (
    <>
        <p className={styles.titulo}>{props.titulo}</p>
        <h1 className={styles.subtitulo}>{props.subtitulo}</h1>
        <img src={props.logo}/>

       
   </>

  )
}
