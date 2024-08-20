import Styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils.js"
import React from "react"

export const Navbar = () => {
    const [menuOpen, setmenuOpen]=React.useState(false)
  return (
        <nav className={Styles.navbar}>

            <a href="/" className={Styles.title}>Portfolio</a>

            <div className={Styles.menu}>
            <img className={Styles.menuBtn} 
            src={ menuOpen 
            ? getImageUrl("nav/closeIcon.png") 
            : getImageUrl("nav/menuIcon.png")
            }
            onClick={()=> setmenuOpen(!menuOpen)}
              />

                <ul className={`${Styles.menuItems} ${menuOpen && Styles.menuOpen}`}
                onClick={()=>setmenuOpen(false)}
                >
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

            </div>
        </nav>
    
  )
}





