import styles from './Cadastro.module.css'
import FormularioSenha from './FormularioSenha';
import { useState } from "react";
import SuccessErrorMessage from '../modelos/SuccessErrorMessage/SuccessErrorMessage';



function Cadastro() {
    var [nome, setNome] = useState(null);
    var [sobrenome, setSobrenome] = useState(null);
    var [nascimento, setNascimento] = useState(null);
    var [sexo, setSexo] = useState(null);
    var [endereco, setEndereco] = useState(null);
    var [numero, setNumero] = useState(null);
    var [complemento, setComplemento] = useState(null);
    var [bairro, setBairro] = useState(null);
    var [cidade, setCidade] = useState(null);
    var [estado, setEstado] = useState(null);
    var [telefone, setTelefone] = useState(null);
    var [email, setEmail] = useState(null);
    var [cliente, setCliente] = useState({});
    const [errorForm, setErrorForm] = useState(null);
    var [errorMessage, setErrorMessage] = useState(null);

    const [showErrorMessage, setShowErrorMessage] = useState(null);
    const [showSuccessMessage, setShowSucessMessage] = useState(null);
    const [showFormCadastro, setShowFormCadastro] = useState(true);

    function renderOptionsStates() {
        return (
            <>
                <option value="">Selecione</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
                <option value="EX">Estrangeiro</option>
            </>
        )
    }


    function handleEnableFormPassWord() {
        setShowFormCadastro(!showFormCadastro);
    }


    function cadastrar(e) {
        e.preventDefault();
        if (verificationFieldsComplete()) {
            buildClientObject();
            showClienteDatas();
            handleEnableFormPassWord();
            showSuccessMessage("Cadastro realizado com sucesso");
        }
        else {
            setErrorMessage("Preencha todos os campos");
        }

    }

    function verificationFieldsComplete() {
        todosCamposEstaoPreenchidos();

        // if(errorForm == false){
        //     return true;
        // }
    }


    function todosCamposEstaoPreenchidos() {
        if (nome != null && sobrenome != null && nascimento != null && sexo != null && endereco != null && numero != null && bairro != null && cidade != null && estado != null && telefone != null && email != null) {
            setErrorForm(false);
        }
        else {
            setErrorForm(true);
        }
    }

    function buildClientObject() {
        setCliente({
            Nome: nome,
            Sobrenome: sobrenome,
            Nascimento: nascimento,
            Sexo: sexo,
            Endereco: endereco,
            Numero: numero,
            Complemento: complemento,
            Bairro: bairro,
            Cidade: cidade,
            Estado: estado,
            Telefone: telefone,
            Email: email
        });
    }

    function showClienteDatas() {
        console.log(cliente);
    }

    function renderFormCadastro() {
        return showFormCadastro ? (
            <div>
                <form onSubmit={cadastrar} className={styles.formulario}>
                    <div>
                        <strong className={styles.subtitulo}>Cadastro</strong>
                        <hr className={styles.divisoria}></hr>
                    </div>
                    <div className={styles.row}>
                        <label>Nome:</label>
                        <input className={styles.input} type="text" id="nome" onChange={(e) => setNome(e.target.value)} value={nome}></input>
                    </div>
                    <div className={styles.row}>
                        <label>Sobrenome:</label>
                        <input className={styles.input} type="text" id="sobrenome" onChange={(e) => setSobrenome(e.target.value)} value={sobrenome}></input>
                    </div>
                    <div className={styles.row}>
                        <label>Data de Nascimento:</label>
                        <input className={styles.input} type="date" id="nascimento" onChange={(e) => setNascimento(e.target.value)} value={nascimento}></input>
                    </div>
                    <div className={styles.row}>
                        <label>Sexo:</label>
                        <select className={styles.input} id="sexo" onChange={(e) => setSexo(e.target.value)}>
                            <option value="m">Masculino</option>
                            <option value="f">Feminino</option>
                            <option value="o">Outro</option>
                        </select>
                    </div>
                    <div className={styles.row}>
                        <label>Endereço:</label>
                        <input className={styles.input} type="text" id="endereco" onChange={(e) => setEndereco(e.target.value)}></input>
                    </div>
                    <div className={styles.row}>
                        <label>Número:</label>
                        <input className={styles.input} type="text" id="numero" onChange={(e) => setNumero(e.target.value)}></input>
                    </div>
                    <div className={styles.row}>
                        <label>Complemento:</label>
                        <input className={styles.input} type="text" id="complemento" onChange={(e) => setComplemento(e.target.value)}></input>
                    </div>
                    <div className={styles.row}>
                        <label>Bairro:</label>
                        <input className={styles.input} type="text" id="bairro" onChange={(e) => setBairro(e.target.value)}></input>
                    </div>
                    <div className={styles.row}>
                        <label>Cidade:</label>
                        <input className={styles.input} type="text" id="cidade" onChange={(e) => setCidade(e.target.value)}></input>
                    </div>
                    <div className={styles.row}>
                        <label>Estado:</label>
                        <select className={styles.input} id="estado" onChange={(e) => setEstado(e.target.value)}>
                            {renderOptionsStates()}
                        </select>
                    </div>
                    <div className={styles.row}>
                        <label>Telefone:</label>
                        <input className={styles.input} type="text" id="telefone" onChange={(e) => setTelefone(e.target.value)}></input>
                    </div>
                    <div className={styles.row}>
                        <label>Email:</label>
                        <input className={styles.input} type="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    {renderButtonsFooter()}
                </form>
            </div>
        ) : "";
    }

    function renderFormPassWord() {
        return !showFormCadastro ? (
            <div>
                <FormularioSenha></FormularioSenha>
            </div>
        ) : "";
    }

    return (
        <div className={styles.page}>
            {renderSuccessErrorMessage()}
            {renderFormCadastro()}
            {renderFormPassWord()}
        </div>);
}

function renderSuccessErrorMessage() {
    // if (errorForm == true && showErrorMessage) {
    //     return (
    //         <>
    //             <SuccessErrorMessage type={"error"}></SuccessErrorMessage>
    //         </>
    //     )
    // }

}

function renderButtonsFooter() {
    return (
        <div>
            <button className={styles.buttonSave} type="submit" >Salvar</button>
        </div>
    );
}

export default Cadastro;