import React , { useState, useEffect }from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from './Rodape.module.css'



export default function Rodape() {
  function getToday() { 
    var today = new Date(); 
   
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var dd = String(today.getDate()).padStart(2, '0'); 
    var yyyy = today.getFullYear(); 
   
  
    today = dd + '/' + mm + '/' + yyyy; 
    return today 
  }

  return (

    
<footer>
     <div className='Rodape'>Rodapé
     <ul>
    <li><FaFacebook/> FACEBOOK</li>
    <li><FaInstagram/>INSTAGRAM</li>
    <li><FaTwitter/>TWITER</li>
     </ul>
     </div>
     <p className={styles.date}>{getToday()}</p>
    
    </footer>
    
  )
}



