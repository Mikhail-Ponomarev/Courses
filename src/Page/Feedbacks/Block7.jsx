import React from "react";
import styles from './Block7.module.scss'
import pic1 from '../img/first.svg'
import pic2 from '../img/second.svg'
import { Person } from "./Person";
const Block7 = (props) => {

    return(
        <div className={styles.Block7}>
            <p className={styles.Block7__Text}>Feedbacks</p>
            <div className={styles.Block7__PersonsBlock}>
                <Person picPerson={pic1} text={"Thank you very much to the creators of the courses, I have been looking for courses for a very long time that can really give me valuable information, here I received a lot of positive emotions and clear information, I also want to express my gratitude to the curators and mentors, they created a wonderful and comfortable atmosphere, thanks to them it was much more interesting to study and nicer. "}/>
                <Person picPerson={pic2} text={"I have been studying marketing for many years, but in these courses I realized that even experience does not give the full knowledge, I learned very interesting nuances and much more, I really liked the schedule, presentation of information and additional materials that I received in these courses . Most recently, I worked as a full-time manager, although I had work experience, but now I am already working as a senior manager in the company, thank you very much to the creators of the courses!"}/>
            </div>

        </div>
    )
}

export {Block7}