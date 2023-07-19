
import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Conteudo,{OlaMundo} from './componentes/Conteudo';
import Rodape from './componentes/Rodape'


/*Arquivo App JSX 
Componente funcional = Porque ele é uma função
*/ 
function App() {

  OlaMundo();

/* Todo componente deve retornar um html entre parenteses*/

  return (

  /** O react substitui o classname por class pq o class é palavra reservada do JS */
  <>
  <img src= 'logo.png ' alt=''></img>
  {/* /* nosso cabecalho com uma propiedade chamada titulo */}
    <Cabecalho logo="logo192.png" titulo="Fav.io" subtitulo="O melhor gerenciador de favoritos da Internet inteira Brasileira!!"/>
  
    <Conteudo/>
    <Rodape/>
    
    

    </>
  );
}

export default App;
