import styles from './Menu.module.css'

function MenuSuperiorDeslogado(){
    return(
        <div className={styles.menu}>
            <section className={styles.row}>
                <button className={styles.button}>Home</button>
                <div>
                    <button className={styles.buttonSave}>Cadastrar</button>
                    <button className={styles.buttonSave}>Logar</button>
                </div>
            </section>
            <hr className={styles.divisoria}></hr>
        </div>
    )
}

export default MenuSuperiorDeslogado;