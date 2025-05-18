import styled, {css} from "styled-components";
import {Theme} from "../../../../styles/Theme.tsx";
import {Link} from "react-scroll";

// Menu

const MenuItem = styled.li`

    position: relative;
`


const NavLink = styled(Link)`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${Theme.colors.font};;
    transition: letter-spacing 0.3s ease; //для плавного эффекта

    // изменение жирности и расстояние между буквами при наведении/
    &:hover, &.active {
        font-weight: 600; 
        letter-spacing: 2px;
        cursor: pointer;
    }
    

    //для линии
    &::before  {
        content: '';
        display: inline-block;
        height: 1px;
        background: ${Theme.colors.accent};
        position: absolute;
        top: 35px;
        left: -10px;
        right: -10px;
        transition: ${Theme.animations.transition};
        //без наведения скрываем
        transform: scale(0);
    }

    &:hover, &.active {
        //  при наведении показваем
        &::before{
            transform: scale(1);
            
        }

    }

    @media ${Theme.media.tablet} {
        font-size: 25px;
    }
`


// DesktopMenu
const DesktopMenu = styled.nav`
 ul {
     display: flex;
     gap: 58px;
     justify-content: center;
 }
`

// MobileMenu
const MobileMenuPopup = styled.div<{isOpen: boolean}>`

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(246, 246, 246, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    //display: none;
    //
    transform: translateX(100%);
    transition: 0.6s ease-in-out;


    ul {
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.3s ease-in-out;
    }

    
    
    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);
        & ul {
            gap: 40px;

        }
    `}

`
const MobileMenu = styled.nav`
`
const BurgerButton=styled.button<{isOpen: boolean}>`
    position: fixed;
    
    top: -122px;
    right: -100px;
    width: 200px;
    height: 200px;
    
    z-index: 999999999;
    
    span {
        display: block;
        width: 36px;
        height: 2px;
        
        background-color: ${Theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 48px;

        ${props => props.isOpen && css<{isOpen: boolean}>`

    background-color: rgba(255, 255, 255, 0);   //прозрачный цвет

`}
        
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${Theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(-10px);
                left: 13px;
                top: 6px;
        `}
        }
        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${Theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(-10px);
                width: 36px;
                
                top: 6px;
        `}
        }
    }
`


export const S = {
    MobileMenu,
    BurgerButton,
    DesktopMenu,
    NavLink,
    MenuItem,
    MobileMenuPopup,
}