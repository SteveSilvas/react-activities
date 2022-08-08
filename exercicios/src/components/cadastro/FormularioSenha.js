import styles from './Cadastro.module.css';
import { useState } from 'react';
import SuccessErrorMessage from '../modelos/SuccessErrorMessage/SuccessErrorMessage'
function FormularioSenha(){

    const [senha, setSenha] = useState();
    const [senha2, setSenha2] = useState();
    const [showSuccessMessage, setShowSucessMessage] = useState(false);
    const [message, setMessage] = useState();

    function renderSuccesMessage(){
        return showSuccessMessage ? <SuccessErrorMessage
            type="success"
            message={message}
        ></SuccessErrorMessage> : "";
    }
    return(
        <div>
             {renderSuccesMessage()}

            <form className={styles.formulario} onSubmit={cadastrarSenha}>
                <div>
                    <strong className={styles.subtitulo}>Cadastro de Senha</strong>
                    <hr className={styles.divisoria}></hr>
                </div>
                <div className={styles.row}>
                    <label>Senha:</label>
                    <input className={styles.input} type="password" id="senha" required onChange={(e) => setSenha(e.target.value)}></input>
                </div>
                <div className={styles.row}>
                    <label>Confirme a Senha:</label>
                    <input className={styles.input} type="password" id="senha2" required onChange={(e) => setSenha2(e.target.value)}></input>
                </div>
                <div>
                    <button className={styles.buttonSave} type="submit" >Salvar</button>
                </div>
            </form>
        </div>
    );

    function cadastrarSenha(e){
        e.preventDefault();
        verificarIgualdade();
        console.log();
    }
    
    function verificarIgualdade(){
        if(senha === senha2){
            console.log(`senhas iguais ${senha}`);
            setShowSucessMessage(true);
            setMessage("Deu tudo certo");
        }else{
            //mensagem de erro
        }
    }
}




export default FormularioSenha;