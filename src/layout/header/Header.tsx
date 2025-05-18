import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Сontainer.ts";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {DesktopMenu} from "./menu/headerMenu/desktopMenu/DesktopMenu.tsx";
import {S} from "./Header_Styles.ts"
import React from "react";
import {MobileMenu} from "./menu/headerMenu/mobileMenu/MobileMenu.tsx";
// import {animateScroll as scroll} from 'react-scroll'
import {useEffect, useState} from "react";


export const Header: React.FC = () => {

        const [width, setWidth] = React.useState(window.innerWidth);
        const breakpoint = 768;

    React.useEffect(() => {

        window.addEventListener("resize", () => setWidth(window.innerWidth));

    }, []);


    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <S.Header isScrolled={isScrolled}>
            <Container>
                <FlexWrapper justify="space-between" align="center" >
                    <Logo />
                    {width < breakpoint ? <MobileMenu />
                                        : <DesktopMenu />}

                </FlexWrapper>
            </Container>

        </S.Header>
    );
};

