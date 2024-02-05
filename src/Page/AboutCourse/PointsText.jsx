import React from "react";
import styles from './Block4.module.scss'

const PointsText = (props) => {
    const a = ' '
    if(props.tmp === "1") {
        return(
            <div className={styles.Block4__Points__Colom1__Elem}>
                <span className={styles.Block4__Points__Colom1__Elem__White}>{props.text1}</span><p>{props.text2}</p>
            </div>
        )
    } else {
        return(
            <div className={styles.Block4__Points__Colom2__Elem}>
                <span className={styles.Block4__Points__Colom2__Elem__White}>{props.text1}</span><p>{props.text2}</p>
            </div>
        )
    }
}

export {PointsText}