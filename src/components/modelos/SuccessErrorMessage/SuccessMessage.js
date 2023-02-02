import styles from './messages.module.css';
import React from 'react';

const SuccessMessage = (props) => {

   return (
        <div
        className={`${styles.box} ${styles.success} ${styles.shadow}`}
        >
            <div className={`${styles.panel} ${styles.success} ${styles.shadow}`}>
                <span className={styles.message}>{props.textMessage}</span>
                <button className={`${styles.confirm} ${styles.success} ${styles.shadow}`}
                onClick={props.hideModal}
                >OK</button>
            </div>
        </div>
    );
}



export default SuccessMessage;