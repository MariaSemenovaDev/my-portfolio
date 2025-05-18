import React from 'react';
import {S} from "./../HeaderMenu_Styles"

const items = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "Projects",
        href: "projects"
    },
    {
        title: "Skills",
        href: "skills"}
    ,
    {
        title: "About",
        href: "about"
    },
    {
        title: "Testimony",
        href: "testimony"
    },
    {
        title: "Contact",
        href: "contact"
    },
]

export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index)=>{
                return <S.MenuItem key={index}>
                    <S.NavLink
                        activeClass="active"
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={-110}
                    >
                        {item.title}
                    </S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    );
};
