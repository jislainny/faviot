
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
  <img src='' alt=''></img>
  {/* /* nosso cabecalho com uma propiedade chamada titulo */}
    <Cabecalho img logo="favorito.png " titulo="O FAVORITO" subtitulo="O MAIS LUXUOSO!!"  />
    
  
    <Conteudo/>
    <Rodape/>
    
    

    </>
  );
}

export default App;
