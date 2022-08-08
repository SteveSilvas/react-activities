import './App.css';
import MenuSuperiorDeslogado from './components/MenuSuperior/MenuSuperiorDeslogado';
import Cadastro from './components/cadastro/cadastro';
import Panel from './components/zTestes/testeUseState';
import SuccessMessage from './components/modelos/SuccessErrorMessage/SuccessMessage';
function App() {
  return (
    <div className="App">
        <MenuSuperiorDeslogado></MenuSuperiorDeslogado>
        <Cadastro></Cadastro>
        {/* <Panel></Panel> */}
        {/* <SuccessMessage message={"deu tudo certo"}></SuccessMessage>  */}
        {/* {<TesteMessages></TesteMessages>} */}
    </div>
  );
}

export default App;
