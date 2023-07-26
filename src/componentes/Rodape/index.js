import React , { useState, useEffect }from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from './Rodape.module.css'



export default function Rodape() {
  return (
    
<footer>
     <div className='Rodape'>Rodapé
     <ul>
    <li><FaFacebook/> FACEBOOK</li>
    <li><FaInstagram/>INSTAGRAM</li>
    <li><FaTwitter/>TWITER</li>
     </ul>
     </div>
    </footer>
  )
}

const CurrentDate = () => {
  const currentDate = new Date().toLocaleDateString(); // Obtém a data corrente no formato de data local

  return <div>{currentDate}</div>;

};


