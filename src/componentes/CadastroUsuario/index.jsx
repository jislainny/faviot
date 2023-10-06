import React from 'react'
import { useState } from 'react';

const CadastroUsuario =() => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');


    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('ConfirmarSenha:', confirmarSenha);
 

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!nome || !email || !senha || !confirmarSenha) {
          alert('Por favor, preencha todos os campos.');
          return;
        }
    
        if (senha !== confirmarSenha) {
          alert('As senhas não coincidem. Tente novamente.');
          return;
        }
}
  return (

    <div>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label form="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
        </div>
        <div>
          <label form="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
        </div>
        <div>
          <label form="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
          />
        </div>
        <div>
          <label form="confirmarSenha">Confirme sua senha:</label>
          <input
            type="password"
            id="confirmarSenha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            placeholder="Confirme sua senha"
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default CadastroUsuario;