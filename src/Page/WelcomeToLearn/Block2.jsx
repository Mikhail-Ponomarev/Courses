import React from "react";
import styles from './Block2.module.scss'
import pic from '../img/pana.png'
const SecondBlock = () => {
    return(
        <div className={styles.Block2}>
            <div className={styles.Block2__TextColom}>
                <p className={styles.Block2__TextColom__TextBig}>Welcome to Learn<br />Marketing!</p>
                <p className={styles.Block2__TextColom__TextSmall}>Are you ready to boost your<br />marketing skills?</p>
                <div className={styles.Block2__TextColom__Btn}>
                    Buy now
                </div>
            </div>
            <div className={styles.Block2__PicBlock}>
                <img src={pic} alt="" className={styles.Block2__PicBlock__Img} />
            </div>
        </div>
    )
}

export {SecondBlock}