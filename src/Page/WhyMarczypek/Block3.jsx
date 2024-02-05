import React from "react";
import styles from './Block3.module.scss'
import { InsciptionBlockElem } from "./InscriptionBlock";
import pic1 from '../img/people.svg'
import pic2 from '../img/mark.svg'
import pic3 from '../img/box.svg'
const Block3 = () => {
    return(
        <div className={styles.Block3}>
            <div className={styles.Block3__Lines}>
                <div className={styles.Block3__Lines__SmallLine}></div>
                <p className={styles.Block3__Lines__Inscription}>
                    Why <span className={styles.Block3__Lines__Inscription__Blue}>M</span>arczypek?
                </p>
                <div className={styles.Block3__Lines__BigLine}></div>
            </div>
            <div className={styles.Block3__Description}>
                <InsciptionBlockElem 
                    line1="Marczypek LTD are professionals in" 
                    line2="field of marketing. Our tutors have" 
                    line3="vast experience and are ready to" 
                    line4="train anyone from zero to PRO."
                    pic={pic1}
                />
                <InsciptionBlockElem 
                    line1="We offer practical exercises and" 
                    line2="assignments so that you can put" 
                    line3="what you have learned into" 
                    line4="practice." 
                    pic={pic2}/>
                <InsciptionBlockElem 
                    line1="Our marketing course is a" 
                    line2="comprehensive program that" 
                    line3="covers various aspects of" 
                    line4="marketing." 
                    pic={pic3}
                />
            </div>
        </div>
    )
}

export {Block3}