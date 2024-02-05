import React, {useEffect, useRef, useState} from "react";
import styles from './Main.module.scss';
import styles2 from './Header/Header.module.scss'
import { Header } from "./Header/Header";
import { SecondBlock } from "./WelcomeToLearn/Block2";
import { Block3 } from "./WhyMarczypek/Block3";
import { Block4 } from "./AboutCourse/Block4";
import { Block5 } from "./CoursePlan/Block5";
import { Block6 } from "./PricingPlans/Block6";
import { Block7 } from "./Feedbacks";
import { Footer } from "./Footer/Footer";
import pic1 from './img/burger.svg';
const Page = () => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const [elemScroll, setElemScroll] = useState(0)
    const [pic, setPic] = useState(pic1)
    const [style, setStyle] = useState('')
    const [flag, setFlag] = useState(false)

    const changeNavbar = () => {
        if(flag) {
            setStyle(styles2.Header__Hide)
            setTimeout(() => {
                setPic(pic1)
            }, 900)
            setFlag(false)
        }
    }

    useEffect(() => {
        if (elemScroll === 1) {
            ref1.current.scrollIntoView({ behavior : 'smooth'})
        } else if (elemScroll === 2) {
            ref2.current.scrollIntoView({ behavior : 'smooth'})
        } else if (elemScroll === 3) {
            ref3.current.scrollIntoView({ behavior : 'smooth'})
        } else if (elemScroll === 4) {
            ref4.current.scrollIntoView({ behavior : 'smooth'})
        } else if (elemScroll === 5) {
            ref5.current.scrollIntoView({ behavior : 'smooth'})
        }
    }, [elemScroll])

    return(
        <div className={styles.Main} onClick={changeNavbar}>
            <div className={styles.Main__Header}>     
                <Header func={setElemScroll} setNavbarLogo={setPic} navbarLogo={pic} setStyleNavbar={setStyle} styleNavbar={style} setFlag={setFlag}/>
            </div>
            <div className={styles.Main__WelcomeToLearn}>
                <SecondBlock />
            </div>
            <div className={styles.Main__WhyMarczypek} ref={ref1}>
                <Block3 />
            </div>
            <div className={styles.Main__AboutCourse}>
                <Block4 />
            </div>
            <div className={styles.Main__CoursePlan} ref={ref2}>
                <Block5 />
            </div>
            <div className={styles.Main__PricingPlans} ref={ref3}>
                <Block6 />
            </div>
            <div className={styles.Main__FinalBlock}>
                <div className={styles.Main__FinalBlock__Feedbacks} ref={ref4}>
                    <Block7 />
                </div>
                <div className={styles.Main__FinalBlock__Footer} ref={ref5}>
                    <Footer func={setElemScroll}/>
                </div>
            </div>
        </div>
    )
}

export {Page}