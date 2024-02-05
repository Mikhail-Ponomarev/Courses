import React from "react";
import styles from './Block6.module.scss'

const Btn2 = (props) => {
    const changeIndex = () => {
        props.setIndex(props.tmp)
        props.setText(props.text)
    }

    if(props.index == props.tmp) {
        return(
            <div className={styles.Block6__PlansInscriptionBlock__Btns__Colom__ActiveBtn} onClick={changeIndex}>
                {props.text}
            </div>
        )
    } else {
        return(
            <div className={styles.Block6__PlansInscriptionBlock__Btns__Colom__PassiveBtn} onClick={changeIndex}>
                {props.text}
            </div>
        )
    }
}

export {Btn2}