import { menuData } from "./menuData"

export default function NavBar ({ menu }) {
    return (
        <nav className="navbar">
            <ul className="menu">
            {menuData.map((menu, index) => {
               return (
                <li className="menu-items" key={index}>
                    <a href={menu.title}>{menu.title}</a>
                </li>
               )
            })}
            </ul>
        </nav>
    )
}