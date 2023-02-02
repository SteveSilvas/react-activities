import styles from './Menu.module.css'

function MenuSuperiorDeslogado(props){
    return(
        <div className={styles.menu}>
            <section className={styles.row}>
                <button className={styles.buttonSave} onClick={props.showHome}>Home</button>
                <div>
                    <button className={styles.buttonSave} onClick={props.showRegister}>Cadastrar</button>
                    <button className={styles.buttonSave} onClick={props.showLogin}>Logar</button>
                </div>
            </section>
            <hr className={styles.divisoria}></hr>
        </div>
    )
}

export default MenuSuperiorDeslogado;