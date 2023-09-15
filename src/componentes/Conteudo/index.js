import React from 'react'
import { FaVaadin } from 'react-icons/fa'

const Conteudo = () => {
  return (
    <div>Conteudo
      <form onSubmit={()=>alert("Favorito salvo")}>
        <label>
          Nome do site
        </label>
        <input name='nome_site'/> 
        <label>
          URL
        </label>
        <input name='url' /> 
      </form>

    </div>
  )
}

export default Conteudo
