import React from "react";
import styles from './Block5.module.scss'

const PlanCourseTable = (props) => {
    return(
        <div className={styles.Block5__Info__TextBlock}>
            <div className={styles.Block5__Info__TextBlock__BaseInfo}>
                <p className={styles.Block5__Info__TextBlock__BaseInfo__Number}>{props.module}</p>
                <p className={styles.Block5__Info__TextBlock__BaseInfo__Name}>{props.name}</p>
            </div>
            <p className={styles.Block5__Info__TextBlock__ModuleText}>
                {props.line1}<br/>{props.line2}<br/>{props.line3}<br/>{props.line4}
            </p>
        </div>
    )
}

export {PlanCourseTable}