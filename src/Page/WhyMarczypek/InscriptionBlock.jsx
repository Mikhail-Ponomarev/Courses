import React from "react";
import styles from './Block3.module.scss'

const InsciptionBlockElem = (props) => {
    return(
        <div className={styles.Block3__Description__Elem}>
            <div className={styles.Block3__Description__Elem__PicBlock}>
                <img src={props.pic} alt="" className={styles.Block3__Description__Elem__PicBlock__Img}/>
            </div>
            <p className={styles.Block3__Description__Elem__Text}>
                {props.line1}<br/>{props.line2}<br/>{props.line3}<br/>{props.line4}
            </p>
        </div>
    )
}

export {InsciptionBlockElem}