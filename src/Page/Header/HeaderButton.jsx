import React, { useContext, useEffect } from "react";
import styles from './Header.module.scss'
import { Context1, Context2, Context3, Context4, Context5 } from "../Page";

const HeaderButton = (props) => {
    return(
        <p className={styles.Header__ButtonsBlock__Text} onClick={() => {props.func(props.tmp)}}>
            {props.text}
        </p>
    )
}

export {HeaderButton}