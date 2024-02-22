export default function NavBar () {
    return (
        <nav>
            {menuData.map((menu, index) => {
                return(
                    <MenuItem items={menu} key={index}/>
                )
            })}
        </nav>
    )
}