import React from "react";
import styles from './Block4.module.scss'
import { PointsText } from "./PointsText";

const Block4 = () => {
    return(
        <div className={styles.Block4}>
            <p className={styles.Block4__AboutCourse}>
                About Course
            </p>
            <p className={styles.Block4__Inscription}>
                Immerse yourself in the exciting world of marketing 
                with our unique course! Our program provides you 
                with all the tools and knowledge you need to 
                become a professional marketer.
            </p>
            <p className={styles.Block4__Benefits}>
                Benefits:
            </p>
            <div className={styles.Block4__Points}>
                <div className={styles.Block4__Points__Colom1}>
                    <PointsText tmp="1" text1="01 " text2="Modern strategies" />
                    <PointsText tmp="1" text1="02" text2="Practical approach" />
                    <PointsText tmp="1" text1="03" text2="Expert instructors" />
                </div>
                <div className={styles.Block4__Points__Colom2}>
                    <PointsText tmp="2" text1="04 " text2="Flexible learning format" />
                    <PointsText tmp="2" text1="05 " text2="Networking opportunities" />
                </div>
            </div>
        </div>
    )
}

export {Block4}