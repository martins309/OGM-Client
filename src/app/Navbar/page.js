import { menuData } from "./menuData"

export default function NavBar () {
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