import styled, {css} from "styled-components";
import {Theme} from "../../../styles/Theme.tsx";
import dots from "../../../assets/img/Dots.webp"
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {motion} from "motion/react";

const Projects = styled.section`

    position: relative;
    overflow: hidden;
    &::before {
        content: url(${dots});
        width: 413px;
        height: 505px;
        display: inline-block;
        position: absolute;
        z-index: -4;
        top: 88px;
        left: 102px;
    }

`
const ProjectsWrapper = styled(FlexWrapper)`
    position: relative;

    //крестик
    &:last-child::after {
        content: "+";
        display: inline-block;
        transform: rotate(-60deg);
        color: rgba(33, 87, 242, 0.1);
        position: absolute;
        font-size: 550px;
        font-style: normal;
        font-weight: 600;
        line-height: 136%;
        right: -80px;
        bottom: -206px;
        z-index: -1;
    }
`
const Project = styled(motion.div)`
    min-height: 400px;
    
    //width: 540px;
    //flex-grow:1;

    border-radius: 26px;
    height: fit-content;

    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);

    transition: ${Theme.animations.transition};

    &:hover {
        transform: scale(1.05);
    }

    
    @media ${Theme.media.dekstop} {
        //max-width: 540px;
    }
`

const ProjectInfoPreview = styled.div`
    background-color: rgba(249, 249, 252, 0.6);
    border-radius: 0 0 26px 26px;
    padding: 0 20px 20px;
`

const ProjectButton = styled.a`
    
    border-radius: 12px;
    width: fit-content;
    height: fit-content;
    color: white;
    background-color: #2157f2;
    padding: 5px 10px;
    
    font-weight: 400;
    font-size: 20px;
    line-height: 136%;
    
    text-align: center;

    cursor: pointer;

    //&::before{
    //    width: 100%;
    //    height: 100%;
    //}
`

const ProjectImagePreview = styled.div`
    
    height: 400px;
    position: relative;
    
    ${ProjectButton} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -35%);
        transition: ${Theme.animations.transition};
    }
    
    &:hover {
        ${ProjectButton} {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
        
        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            

            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(4px);

            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            transition: ${Theme.animations.transition};
        }
    }

    
    @media ${Theme.media.tablet} {
        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;

            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(4px);

            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            opacity: 1;
        }
        
        ${ProjectButton} {
            opacity: 1;
        }
    }
`
const PreviewImg = styled.img`

    border-top-left-radius: 26px;
    border-top-right-radius: 26px;
    
    width: 100%;
    height: 400px;
    object-fit: cover;
`

const TitleProject = styled.h3`
    font-weight: 700;
    font-size: 23px;
    color: #2157f2;
    
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
`
const DescriptionProject = styled.p`
    padding-bottom:  25px;
    font-size: 20px;
    text-align: center;
`


const TabMenu = styled.nav`
    //margin-bottom: 40px;

    ul {
        display: flex;
        gap: 41px;
        justify-content: center;

        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;

    }
    

    
    @media ${Theme.media.tablet} {
        ul {
            gap: 30px;
            flex-wrap: wrap;
        }
        
        @media ${Theme.media.mobile} {
            ul {
                gap: 10px;
            }
`

const TabMenuItem = styled.li<{active?: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;


        padding: 7px 40px 8px;
        white-space: nowrap;

        border: 3px solid #a6bcfa;
        border-radius: 67px;
        width: 159px;
        height: 42px;

        background-color: #f8faff;

        &:hover {
            background-color: #a6bcfa;
            transition: ${Theme.animations.transition};
        }

        ${props => props.active && css<{active?: boolean}>`
            background-color: #a6bcfa;
    ` }
`




export const S = {
    Projects,
    ProjectsWrapper,
    Project,
    ProjectInfoPreview,
    ProjectButton,
    ProjectImagePreview,
    PreviewImg,
    TitleProject,
    DescriptionProject,
    TabMenu,
    TabMenuItem
}


