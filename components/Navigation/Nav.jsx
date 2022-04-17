import React from "react";
import Link from "next/link";
import NavItems from "@components/NavigationItems/NavItems";

const Nav = () => {
    return(
        <nav>
            <NavItems link={`home`} icon={`home`} name={`Home`} />
            <NavItems link={`search`} icon={`map`} name={`Search`} />
            <NavItems link={`favorites`} icon={`favorite`} name={`Favorites`} />
        </nav>
    )
}

export default Nav;