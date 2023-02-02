import styles from './messages.module.css';
import React from 'react';

const ErrorMessage = (props) => {

   return (
        <div className={styles.box}>
            <div className={`${styles.panel} ${styles.error} ${styles.shadow}`}>
                <span className={styles.message}>
                    {props.textMessage}
                </span>
                <buton 
                    className={`${styles.confirm} ${styles.shadow}`}
                    onClick={props.hideModal}>OK</buton>
            </div>
        </div>
    );
}



export default ErrorMessage;
