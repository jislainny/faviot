import React from 'react'
import styles from './Login.module.css'
import { useState } from 'react';

function LoginUsuario() {
    const [emailUsuario, setEmailUsuario] = useState("")
    const [senhaUsuario, setSenhaUsuario] = useState("")

    function confimeSuaSenha() {
        let usuario = JSON.parse(localStorage.getItem('usuario'))
        
        let emailCadastrado = usuario.emailUsuario
        let senhaCadastrada = usuario.senhaUsuario

        if(emailCadastrado === emailUsuario && senhaCadastrada === senhaUsuario) {
            alert("Seja bem vindo ao site!!")
        }else{
            alert("Senha ou email incorretos")
        }
    }

    return (
        <div className={styles.container}>
         <h2>Login</h2>
            <form className={styles.form}>
            <div/>
            <label>Email:</label>
            <input
                type='text'
                name="emailUsuario"
                onChange={(e)=> setEmailUsuario(e.target.value)}
            ></input>
            <div/>

            <div/>
            <label>Senha:</label>
            <input
                type='password'
                name="senhaUsuario"
                onChange={(e=> setSenhaUsuario(e.target.value))}
            ></input>
             <div/>

            <input
                type="button"
                value="Login"
                onClick={()=> confimeSuaSenha()}
            />
            </form>
        </div>
    );
}


export default LoginUsuario;