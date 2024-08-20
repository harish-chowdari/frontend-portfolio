import skills from "../../data/skills.json"
import { getImageUrl } from "../../utils"

import Styles from "./Skills.module.css"

export const Skills = () => {
  return (
    <section className={Styles.container} id="skills">
        <h1 className={Styles.title}>Skills</h1>
        <div className={Styles.content}>

                <div className={Styles.skills}>{
                    skills.map((skill,id)=>{
                        return (
                            <div key={id} className={Styles.skill}>
                            <div className={Styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} />
                            </div>
                            <p>{skill.title}</p>
                            </div>
                        )
                    })
                } </div>
           

           

        </div>
    </section>
  )
}
