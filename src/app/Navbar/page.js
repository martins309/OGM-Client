

import { menuData } from "./menuData"
import styles from "./nav.module.css"  // Import CSS module here

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.menu}>
            {menuData.map((menu, index) => {
               return (
                <li className={styles.menuItems} key={index}>
                    <a href={menu.title}>{menu.title}</a>
                </li>
               )
            })}
            </ul>
        </nav>
    )
}
