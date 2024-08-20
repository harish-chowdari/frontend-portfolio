import React from 'react'
import { getImageUrl } from "../../utils"
import Styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={Styles.container}>
    <div className={Styles.content}>
        <h1 className={Styles.title}>Hi, I am Harish</h1>
        <p className={Styles.description}>
       I have developed and contributed to several web development projects using modern web technologies such as HTML, CSS, JavaScript, and ReactJS. These projects demonstrate my ability to create responsive, user-friendly interfaces and dynamic web applications.
        </p>
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWtDtZDchTbnRCcNpsxhCHRfhqHvDzwmVlFXnxsldVFcLRMvdGTltpVgFwvJpRQpZMKSGjKKG" 
        className={Styles.contactBtn}>Contact Me
        </a>
    </div>
    <img className={Styles.heroImg} src={getImageUrl("hero/heroImage.png")} />
    <div className={Styles.topBlur}> </div>
    <div className={Styles.bottomBlur}> </div>
    </section>
  )
}

