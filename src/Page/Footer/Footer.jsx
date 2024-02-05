import React from "react";
import styles from './Footer.module.scss'
import pic from '../img/Group8.svg'
import { Link } from "./Link";
const Footer = (props) => {
    return(
       <div className={styles.Footer}>
            <div className={styles.Footer__Links}>
                <Link func={props.func} tmp={1} text="About us"/>
                <Link func={props.func} tmp={2} text="Course"/>
                <Link func={props.func} tmp={3} text="Pricing plans"/>
                <Link func={props.func} tmp={4} text="Feedbacks"/>
                <Link func={props.func} tmp={5} text="Contact us"/>
            </div>
            <div className={styles.Footer__Info}>
                <img src={pic} alt="" className={styles.Footer__Info__Img}/>
                <p className={styles.Footer__Info__Text}>Email mskrzypek988@gmail.com</p>
                <p className={styles.Footer__Info__Text}>26/28 Bedford Row, London, United Kingdom, WC1R 4LP</p>
                <p className={styles.Footer__Info__Text}>Company registration number: 15147283</p>
            </div>
       </div>
    )
}

export {Footer}