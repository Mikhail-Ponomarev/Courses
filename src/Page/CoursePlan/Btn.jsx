import React from "react";
import styles from './Block5.module.scss'

const Btn = (props) => {
    
    const changeIndex = () => {
        props.setIndex(props.tmp)
    }

    if(props.tmp === props.index) {
        return(
            <div className={styles.Block5__Info__Btns__Block__Active} onClick={changeIndex}>
                {props.text}
            </div>
        )
    } else {
        return(
            <div className={styles.Block5__Info__Btns__Block__Passive} onClick={changeIndex}>
                {props.text}
            </div>
        )
    }
}

export {Btn}