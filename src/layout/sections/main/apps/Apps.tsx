
import styled from "styled-components";
import React from "react";
import {App} from "../app/App.tsx";
import icon from "../../../../aSSets/img/Ellipse 2.png"
import {Theme} from "../../../../styles/Theme.tsx";
import { Fade } from "react-awesome-reveal";

const dataApps = [
    {
        title : "WebStorm" ,
        src: `${icon}`,
    },
    {
        title :"Visual Studio",
        src: `${icon}`,
    },
    {
        title :"Git",
        src: `${icon}`,
    },

    {
        title :"Figma",
        src: `${icon}`,
    },
    // {
    //     title :"Figma",
    //     src: `${icon}`,
    // },
]



export const Apps: React.FC = () => {
    return (
        <>
        <Fade cascade={true} delay={200} direction={"right"}>
            <AppsStyled>

                    {dataApps.map((app, index) => {
                        return <App src={app.src}
                                    key={index}
                                    spanTitle={app.title}/>
                    })}

            </AppsStyled>
        </Fade>
        </>

    );
};


const AppsStyled = styled.ul`
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    
    margin-top: 48px;
    margin-left: 20%;
    
    @media ${Theme.media.tablet} {
        display: grid;
        place-items: center;
        gap: 55px;
        grid-template-columns: repeat(2, 1fr); /* Две колонки */
        margin-top: 160px;
        margin-left: 0%;
    }

    @media ${Theme.media.mobile} {
        margin-top: 184px;
        gap: 35px;
    }
`