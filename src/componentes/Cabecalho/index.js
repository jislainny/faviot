import React from 'react'
import styles from './Cabecalho.module.css'
import Menu from '../Menu'

export default function  Cabecalho(props) {
  return (
   
    <div className={styles.cabecalho}>
      <img className={styles.logo} src={props.logo}/>
        <p className={styles.titulo}>{props.titulo}</p>
        <p className={`${styles.subtitulo} ${styles.subtitulo}$`} > {props.subtitulo} </p>
        <div>
          <Menu/>

   
  </div>
       

       </div>
  

  

  )
}
