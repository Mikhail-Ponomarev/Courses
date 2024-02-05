import React from "react";
import styles from './Footer.module.scss'

const Link = (props) => {
    return(
        <p className={styles.Footer__Links__Link} onClick={() => {props.func(props.tmp)}}>
            {props.text} 
        </p>
    )
}

export {Link}