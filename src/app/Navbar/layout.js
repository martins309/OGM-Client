import NavBar from "../Navbar"
import styles from "./nav.module.css"
export default function navLayout({ children }){
    return (
        <div>
            <NavBar />
            {children}
        </div>
    
    )
}