import React from "react";
import styles from './Block7.module.scss'
import pic from '../img/stars.svg'
const Person = (props) => {
    return(
        <div className={styles.Block7__PersonsBlock__Person}>
            <img src={props.picPerson} alt="" className={styles.Block7__PersonsBlock__Person__Img}/>
            <p className={styles.Block7__PersonsBlock__Person__Text}>{props.text}</p>
            <img src={pic} alt="" className={styles.Block7__PersonsBlock__Person__Stars}/>
        </div>
    )
}

export {Person}