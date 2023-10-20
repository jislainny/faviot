import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from './paginas/Principal'

const routes = () => {
  return 
  {
    <BrowserRouter>
    <Routes>
        <Route path='/' element ={<Principal/>}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/cadastro' element ={<CasdastroUsuario/>}/>


    </Routes>
    
    </BrowserRouter>
  }
}

export default routes