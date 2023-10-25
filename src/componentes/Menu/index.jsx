import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Menu.module.css'


const Menu = () => {
    return(
        <>
        <ul>
       <li><Link to={'/'}>Home</Link></li>
       <li><Link to={'/Login'}>Login</Link></li>
       <li><Link to={'/Cadastro'}>Cadastro de Usuario</Link></li>
       
        </ul>
        
        
        
        
        </>
    )
}
export default Menu