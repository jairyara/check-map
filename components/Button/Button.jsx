import React from "react";
import styles from './button.module.css'

const Button = ({field}) => {
    return(
        <button className={styles.button}>
            {field}
        </button>
    )
}

export default Button;