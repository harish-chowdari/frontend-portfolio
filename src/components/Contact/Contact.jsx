import { getImageUrl } from "../../utils"
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">

        <div className={styles.text}>
        <h1>Contact</h1>
        <p>Feel free to reach out!</p>
        </div>

        <ul className={styles.links}>
            <li className={styles.link} >
                <img src={getImageUrl("contact/emailIcon.png")} />
                <a href="https://mail.google/">harishnagubadi@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} />
                <a href="https://github.com/harish-chowdari">github/Harish Chowdari</a>
            </li >

            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} />
                <a href="https://www.linkedin.com/in/harish-chowdari-nagubadi-112628259">linkedin/Harish Chowdari</a>
            </li>

        </ul>

    </footer>
  )
}
