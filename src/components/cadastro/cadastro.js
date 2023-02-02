import styles from "./Cadastro.module.css";
import FormularioSenha from "./FormularioSenha";
import { useState } from "react";
import GetCepButton from "../GetCep/GetCepButton";
import SuccessMessage from "../modelos/SuccessErrorMessage/SuccessMessage";
import ErrorMessage from "../modelos/SuccessErrorMessage/ErrorMessage";

function Cadastro() {
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [nascimento, setNascimento] = useState();
    const [sexo, setSexo] = useState();
    const [cep, setCEP] = useState();
    const [endereco, setEndereco] = useState();
    const [logradouro, setLogradouro] = useState();
    const [numero, setNumero] = useState();
    const [complemento, setComplemento] = useState();
    const [bairro, setBairro] = useState();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();
    const [ddd, setDDD] = useState();
    const [ibge, setIBGE] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState();
    const [cliente, setCliente] = useState({});
    const [senha, setSenha] = useState();

    const [messageModal, setMessageModal] = useState({
        showMessage: false,
        textMessage: "",
        typeMessage: null,
    });

    const [showFormCadastro, setShowFormCadastro] = useState(true);
    const [showFormPassword, setShowFormPassword] = useState(false);
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
        );
    }

    function startRegistration(e) {
        e.preventDefault();
        if (checkFilledFields()) {
            setShowFormCadastro(false);
            setShowFormPassword(true);
        }
    }

    function checkFilledFields() {
        if (
            nome &&
            sobrenome &&
            nascimento &&
            sexo &&
            endereco &&
            numero &&
            bairro &&
            cidade &&
            estado &&
            telefone &&
            email
        )
            return true;

        setMessageModal({
            showMessage: true,
            textMessage: "Preencha todos os campos",
            typeMessage: 0,
        });
        return false;
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
            Email: email,
            Senha: senha,
        });
    }

    const setEnderecoHandle = (endereco) => {
        setEndereco(endereco);
        setLogradouro(endereco.logradouro);
        setBairro(endereco.bairro);
        setCEP(endereco.cep);
        setDDD(endereco.ddd);
        setIBGE(endereco.ibge);
        setCidade(endereco.localidade);
        setEstado(endereco.uf);
    };

    function renderFormCadastro() {
        return showFormCadastro ? (
            <form className={styles.formulario}>
                <div>
                    <strong className={styles.subtitulo}>Cadastro</strong>
                    <hr className={styles.divisoria}></hr>
                </div>
                <div className={styles.row}>
                    <label>Nome:</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="nome"
                        onChange={(e) => setNome(e.target.value)}
                        value={nome}
                    ></input>
                </div>
                <div className={styles.row}>
                    <label>Sobrenome:</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="sobrenome"
                        onChange={(e) => setSobrenome(e.target.value)}
                        value={sobrenome}
                    ></input>
                </div>
                <div className={styles.row}>
                    <label>Data de Nascimento:</label>
                    <input
                        className={styles.input}
                        type="date"
                        id="nascimento"
                        onChange={(e) => setNascimento(e.target.value)}
                        value={nascimento}
                    ></input>
                </div>
                <div className={styles.row}>
                    <label>Sexo:</label>
                    <select
                        className={styles.input}
                        id="sexo"
                        onChange={(e) => setSexo(e.target.value)}
                    >
                        <option value="m">Masculino</option>
                        <option value="f">Feminino</option>
                        <option value="o">Outro</option>
                    </select>
                </div>
                <div className={styles.row}>
                    <label>CEP:</label>
                    <GetCepButton
                        className={styles.inputCEP}
                        setEndereco={setEnderecoHandle}
                    ></GetCepButton>
                </div>
                <div className={styles.row}>
                    <label>Logradouro:</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="endereco"
                        value={logradouro}
                        onChange={(e) => setEndereco(e.target.value)}
                    ></input>
                </div>
                <div className={styles.row}>
                    <label>Número:</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="numero"
                        onChange={(e) => setNumero(e.target.value)}
                    ></input>
                </div>
                <div className={styles.row}>
                    <label>Complemento:</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="complemento"
                        onChange={(e) => setComplemento(e.target.value)}
                    ></input>
                </div>
                <div className={styles.row}>
                    <label>Bairro:</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="bairro"
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                    ></input>
                </div>
                <div className={styles.row}>
                    <label>Cidade:</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="cidade"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                    ></input>
                </div>
                <div className={styles.row}>
                    <label>Estado:</label>
                    <select
                        className={styles.input}
                        id="estado"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                    >
                        {renderOptionsStates()}
                    </select>
                </div>
                <div className={styles.row}>
                    <label>Telefone:</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="telefone"
                        onChange={(e) => setTelefone(e.target.value)}
                    ></input>
                </div>
                <div className={styles.row}>
                    <label>Email:</label>
                    <input
                        className={styles.input}
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                {renderButtonsFooter()}
            </form>
        ) : (
            ""
        );
    }
    const setSenhaHandler = (senha) => {
        setShowFormPassword(false);
        setSenha(senha);
        handleSuccesSave();
    };

    const handleSuccesSave = ()=>{
        buildClientObject();
        setMessageModal({
            showMessage: true,
            textMessage: `Usuário ${nome} cadastrado com sucesso.`,
            typeMessage: 1,
        });
    }

    function renderFormPassWord() {
        return (
            showFormPassword && (
                <FormularioSenha setSenha={setSenhaHandler}></FormularioSenha>
            )
        );
    }

    return (
        <div className={styles.page}>
            {renderSuccessErrorMessage()}
            {renderFormCadastro()}
            {renderFormPassWord()}
        </div>
    );

    function renderButtonsFooter() {
        return (
            <div>
                <button
                    className={styles.buttonSave}
                    onClick={(e) => startRegistration(e)}
                >
                    Salvar
                </button>
            </div>
        );
    }

    function renderSuccessErrorMessage() {
        let showMessage = messageModal.showMessage;
        let textMessage = messageModal.textMessage;
        let typeMessage = messageModal.typeMessage;

        const hideModalHandler = () => {
            setMessageModal({
                showMessage: false,
                textMessage: "",
                typeMessage: 0,
            });
        };
        
        if (showMessage) {
            console.log(typeMessage);
            if (typeMessage) {
                return (
                    <>
                        <SuccessMessage
                            textMessage={textMessage}
                            hideModal={hideModalHandler}
                        ></SuccessMessage>
                    </>
                );
            } else {
                return (
                    <>
                        <ErrorMessage
                            textMessage={textMessage}
                            hideModal={hideModalHandler}
                        ></ErrorMessage>
                    </>
                );
            }
        }
    }
}

export default Cadastro;
