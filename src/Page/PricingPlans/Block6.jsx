import React, { useState } from "react";
import styles from './Block6.module.scss'
import { Btn2 } from "./Btn2";
import { Content } from "./Content";
const Block6 = () => {
    const [text, setText] = useState("low")
    const [index, setIndex] = useState(0);
    const ContentMass = [
        'Access to module 1 \n Registration in the affiliate programme',
        'Access to module 1, 2 \n Registration in the affiliate programme \n Access to pre-training',
        'Access to module 1, 2 \n Registration in the affiliate programme \n Access to pre-training \n Access to the library of promotional materials',
        'Access to module 1, 2, 3 \n Registration in the affiliate programme \n Access to pre-training \n Access to the library of promotional materials',
        'Access to Base Module \n Registration in the affiliate programme \n Access to pre-training \n Access to the library of promotional materials',
        'Base package privileges \n Access to private chat',
        'Base package privileges \n Access to private chat \n Support of a personal business consultant',
        'Base package privileges \n Access to private chat \n Support of a personal consultan \n Access to the bonus module',
        'Boss package privileges \n Personalised session with a smm coach (4 hours)',
        'Boss package privileges \n Personalised session with a smm coach (8 hours) \n Help with finding orders'
    ]
    const price = ['50$', '100$', '150$', '200$', '250$', '300$', '350$', '400$', '450$', '500$']

    return(
        <div className={styles.Block6}>
            <p className={styles.Block6__Text}>Pricing Plans</p>
            <div className={styles.Block6__PlansInscriptionBlock}>
                <div className={styles.Block6__PlansInscriptionBlock__Btns}>
                    <div className={styles.Block6__PlansInscriptionBlock__Btns__Colom}>
                        <Btn2 index={index} setIndex={setIndex} tmp={0} text="Low" setText={setText}/>
                        <Btn2 index={index} setIndex={setIndex} tmp={1} text="Beginner" setText={setText}/>
                        <Btn2 index={index} setIndex={setIndex} tmp={2} text="Fan" setText={setText}/>
                        <Btn2 index={index} setIndex={setIndex} tmp={3} text="Intermediate" setText={setText}/>
                        <Btn2 index={index} setIndex={setIndex} tmp={4} text="Base" setText={setText}/>
                    </div>
                    <div className={styles.Block6__PlansInscriptionBlock__Btns__Colom}>
                        <Btn2 index={index} setIndex={setIndex} tmp={5} text="Adwanced" setText={setText}/>
                        <Btn2 index={index} setIndex={setIndex} tmp={6} text="Pro" setText={setText}/>
                        <Btn2 index={index} setIndex={setIndex} tmp={7} text="Boss" setText={setText}/>
                        <Btn2 index={index} setIndex={setIndex} tmp={8} text="Business" setText={setText}/>
                        <Btn2 index={index} setIndex={setIndex} tmp={9} text="Millionaire" setText={setText}/>
                    </div>
                </div>
                <Content text={text} ContentItem={ContentMass[index]} price={price[index]} />
            </div>
        </div>
    )
}

export {Block6}