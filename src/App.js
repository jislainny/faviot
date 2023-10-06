import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape';
import Conteudo from './componentes/Conteudo'
import CadastroUsuario from './componentes/CadastroUsuario';
import LoginUsuario from './componentes/LoginUsuario';


/*
Arquivo App JSX
Componente funcional = Porque ele é uma função
*/
function App() {

  /*Todo componente deve retornar um html entre parenteses*/
  return (
    /*O React substitui className por class pq class é palavra reservada do JS*/
    <>
    {/* Nosso cabecalho tem uma propriedade chamada titulo */}
    <Cabecalho logo="favorito.png" titulo="FAVORITO" subtitulo="O MELHOR PARA VOCÊ!!"/>
   <CadastroUsuario/>
   <LoginUsuario/>
    {/* <Conteudo/> */}
    {/* <Estados/> */}
    <Rodape/>
    </>
  );
}

export default App;