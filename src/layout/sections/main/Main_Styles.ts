import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Theme} from "../../../styles/Theme.tsx";
import {font} from "../../../styles/Common.tsx";


const Main = styled.section`
    min-height: 100vh;
    display: flex;
    
    position: relative;
    padding-top: 140px;
    
    //голубой фон слева
    &::before {
        content: "";
        height: 100%;
        width: 30%;
        background-color: ${Theme.colors.secondaryBg};
        position: absolute;
        z-index: -1;
        left: 0;
        bottom: 0;
    }
    @media ${Theme.media.tablet} {
        padding-top: 50px;
        &::before {
            height: 70%;
            bottom: 35%;
        }
    }
    @media ${Theme.media.mobile} {
    &::before {
       height: 76%;
       bottom: 30%;
    }
    }
`

const MainWrapper = styled.div`
    
    //круг
    &::before {
        content: "";
        width: 152px;
        height: 152px;
        position: absolute;
        z-index: -2;
        border: 22px solid rgba(33, 87, 242, 0.4);
        border-radius: 50%;
        right: 6%;
        bottom: 28%;
    }

    //крестик
        &::after {
            content: "+";
            display: inline-block;
            transform: rotate(-45deg);
            color: ${Theme.colors.secondaryBg};
            position: absolute;
            font-size: 130px;
            font-style: normal;
            font-weight: 600;
            line-height: 136%;
            left: 36%;
            top: 5%;
            z-index: -1;
        }

`

//заблюреный контейнер
const CardWrapper = styled(FlexWrapper)`
    
    
    width: 100%;
    height: fit-content;

    border-radius: 200px 0;
    padding: 42px 20px 40px 20px;

    backdrop-filter: blur(5px);
    background: linear-gradient(132deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 71, 255, 0.15) 100%);
    border: 2px solid ${Theme.colors.primaryBg};

    position: relative;
    
    @media ${Theme.media.tablet} {
        padding: 42px 20px 40px 20px;
        justify-content: center;
        align-items: stretch;
        gap: 20px;
    }

    @media ${Theme.media.mobile} {
        margin-top: 53px;
        border-radius: 112px 0;
    }

`

// текст внутри контейнера
const InfoWrapper = styled.div`
    
    max-width: 422px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;


    @media ${Theme.media.tablet} {
        gap: 11px;
    }
`

const MyName = styled.h2`
    ${font({family:"Roboto, sans-serif", weight: 700, color: 'rgb(57, 57, 57)', lineHeight: 1.4, Fmax: 55, Fmin: 30})};
    white-space: nowrap;
    text-align: left;
    
    span {
        color: ${Theme.colors.accent};
    }
`
const MainTitle = styled.h1`
    ${font({family:"Roboto, sans-serif", weight: 700, color: 'rgb(57, 57, 57)', lineHeight: 1.4, Fmax: 52, Fmin: 30})};
    
    white-space: nowrap;
    text-align: left;
    padding-bottom: 20px;
    p {
        display: none;
    }
`
const AboutMe = styled.p`
    ${font({family:"Roboto, sans-serif", weight: 400, color: 'black', lineHeight: 1.2, Fmax: 20, Fmin: 11})};
    text-align: left;
`

// Фото
const Photo = styled.img`
    max-width: 400px;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 25px solid rgb(255, 255, 255);
    
    @media ${Theme.media.tablet} {
        border: 20px solid rgb(255, 255, 255);
        width: 334px;
    }

    @media ${Theme.media.mobile} {
        min-width: 160px;
        width: 100%;
        border: 15px solid rgb(255, 255, 255);
    }
`
const ButtonWrapper = styled(FlexWrapper)`
    margin-top: 42px;
    @media ${Theme.media.mobile} {
        gap: 18px;
        margin-top: 26px;
    }
`

const Button = styled.a`
    ${font({family:"Roboto,sans-serif", weight: 600, color: "white", lineHeight: 1.5, Fmax: 15, Fmin: 10})};
    
    display: inline-block;
    border-radius: 20px;
    background-color: ${Theme.colors.accent};
    color: white;
    padding: 15px 36px;
    cursor: pointer;
    
    @media ${Theme.media.mobile} {
        padding: 8px 20px;
    }
`

const Download = styled.a`
    ${font({family:"Roboto,sans-serif", weight: 600, color: "#6c92ff", lineHeight: 1.5, Fmax: 15, Fmin: 10})};
    
    &:visited {
        color: #6c92ff;
    }
`




export const S = {
    Main,
    MainWrapper,
    CardWrapper,
    InfoWrapper,
    MainTitle,
    MyName,
    AboutMe,
    Photo,
    ButtonWrapper,
    Button,
    Download,
}