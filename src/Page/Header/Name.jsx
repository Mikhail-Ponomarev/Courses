import React from "react";
import styles from './Header.module.scss'
import pic from '../img/Group7.svg'
const Name = () => {
    const tmp = true;
    return(
        <div className={styles.Header__NameCourse}>
            <img src={pic} className={styles.Header__NameCourse__Pic} />
        </div>        
    )
}

export {Name}