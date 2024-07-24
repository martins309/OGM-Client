import NavBar from "./page"
import styles from "./nav.module.css"
export default function navLayout({ children }){
    return (
        <NavBar className={styles.navbar}/>
    )
}