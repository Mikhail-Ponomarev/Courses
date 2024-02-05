import React, { useContext, useEffect, useState } from "react";
import styles from './Header.module.scss'
import { Name } from "./Name";
import { HeaderButton } from "./HeaderButton";
import pic2 from '../img/burgerBlack.svg'

const Header = (props) => {
    const changeNavbar = () => {
        props.setStyleNavbar(styles.Header__Show)
        props.setNavbarLogo(pic2)
        props.setFlag(true)
    }
    return (
        <div className={styles.Header} onClick={e => e.stopPropagation()}>
            <Name />
            <div className={[styles.Header__ButtonsBlock, props.styleNavbar].join(' ')} onClick={e => e.stopPropagation()}>
                <HeaderButton func={props.func} tmp={1}  text="About us" />
                <HeaderButton func={props.func} tmp={2} text="Course" />
                <HeaderButton func={props.func} tmp={3} text="Pricing plans" />
                <HeaderButton func={props.func} tmp={4} text="Feedbacks" />
                <HeaderButton func={props.func} tmp={5}  text="Contact us" />
            </div>
            <div className={styles.Header__Burger} onClick={changeNavbar}>
                <img src={props.navbarLogo} alt="" className={styles.Header__Burger__Pic}/>
            </div>
        </div>
    )
}

export {Header}