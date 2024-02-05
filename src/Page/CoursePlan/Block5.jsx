import React, { useState } from "react";
import styles from './Block5.module.scss'
import { PlanCourseTable } from "./PlanCourseTable";
import { Btn } from "./Btn";
const Block5 = () => {
    const [index, setIndex] = useState(0)

    const modules = ['Module 1:', 'Module 2:', 'Module 3:', 'Module 4:']
    const moduleNames = ['Introduction to Marketing', 'Product and Pricing', 'Promotion and Communication', 'Marketing Research and Analytics']
    const lines1 = ['Basic concepts and definitions in marketing', 'Product development and management', 'Development of marketing communications', 'Methods of data collection and research']
    const lines2 = ['Market research and consumer analysis', 'Market segmentation and product positioning', 'Advertising, PR and promotion through social media', 'Market and competitor analysis']
    const lines3 = ['Developing a marketing strategy', 'Determining the price and pricing strategy', 'Brand building and management', 'Measuring the effectiveness of marketing campaigns']
    const lines4 = ['Module objectives and expected outcomes', 'Module objectives and expected outcomes', 'Module objectives and expected outcomes', 'Module objectives and expected outcomes']

    return(
        <div className={styles.Block5}>
            <p className={styles.Block5__Inscription}>Base Course Plan</p>
            <div className={styles.Block5__Info}>
                <div className={styles.Block5__Info__Btns}>
                    <div className={styles.Block5__Info__Btns__Block}>
                        <Btn setIndex={setIndex} tmp={0} index={index} text={"Module 1"}/>
                        <Btn setIndex={setIndex} tmp={1} index={index} text={"Module 2"}/>
                    </div>
                    <div className={styles.Block5__Info__Btns__Block}>
                        <Btn setIndex={setIndex} tmp={2} index={index} text={"Module 3"}/>
                        <Btn setIndex={setIndex} tmp={3} index={index} text={"Module 4"}/>
                    </div>
                </div>
                <PlanCourseTable 
                    module={modules[index]}
                    name={moduleNames[index]}
                    line1={lines1[index]}
                    line2={lines2[index]}
                    line3={lines3[index]}
                    line4={lines4[index]}
                />
            </div>
        </div>
    )
}

export {Block5}