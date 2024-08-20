import { getImageUrl } from "../../utils";
import Styles from "./About.module.css"

export const About = () =>{
  return (
    <section className={Styles.container} id="about">
    
      <h2 className={Styles.title}>About</h2>
      <div className={Styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} 
          className={Styles.aboutImg}
        />
        
        <ul className={Styles.aboutItems}>
          <li className={Styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} />
            <div className={Styles.aboutItemText}>
            <h3>B.Tech</h3>
            <p>Information Technology student </p>
            </div>
          </li>

          <li className={Styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} />
            <div className={Styles.aboutItemText}>
            <h3>Introduction</h3>
            <p>I consider my self a responsible and orderly person. I am looking forward for my first work experience </p>
            </div>
          </li>

          <li className={Styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} />
            <div className={Styles.aboutItemText}>
            <h3>Front End Developer</h3>
            <p>I am a front end developer with hands on knowledge of HTML,CSS,JavaScript and ReactJS </p>
            </div>
          </li>

        </ul>
        
      </div>
    </section>
  )
}
