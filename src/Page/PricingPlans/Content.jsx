import React from "react";
import styles from './Block6.module.scss'
import pic from '../img/door.svg'
const Content = (props) => {
    return(
        <div className={styles.Block6__PlansInscriptionBlock__Content}>
            <p className={styles.Block6__PlansInscriptionBlock__Content__Name}>{props.text}</p>
            <p className={styles.Block6__PlansInscriptionBlock__Content__Discription}>
                {
                    props.ContentItem.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line} <br/> <br />
                        </React.Fragment>
                    )) 
                }
            </p>
            <div className={styles.Block6__PlansInscriptionBlock__Content__Footer}>
                <p className={styles.Block6__PlansInscriptionBlock__Content__Footer__Price}>{props.price}</p>
                <div className={styles.Block6__PlansInscriptionBlock__Content__Footer__Group}>
                    <img src={pic} alt="" className={styles.Block6__PlansInscriptionBlock__Content__Footer__Group__Img}/>
                    <p className={styles.Block6__PlansInscriptionBlock__Content__Footer__Group__Buy}>Buy</p>
                </div>
            </div>
        </div>
    )
}

export {Content}