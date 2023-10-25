import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from './paginas/Principal'
import LoginUsuario from './paginas/LoginUsuario'
import CadastroUsuario from './paginas/CadastroUsuario'
import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape';



const Rotas= () => {
  return (
  
    <BrowserRouter>
     <Cabecalho logo="favorito.png"
      titulo="FAVORITO" 
      subtitulo="O MELHOR PARA VOCÊ!!"/>
    <Routes>
        <Route path='/' element ={<Principal/>}/>
        <Route path='/login' element ={<LoginUsuario/>}/>
        <Route path='/cadastro' element ={<CadastroUsuario/>}/>


    </Routes>
    <Rodape/>
    </BrowserRouter>
  )
}

export default Rotas;