import styled from "styled-components";
import {Theme} from "../styles/Theme.tsx";
import {font} from "../styles/Common.tsx";
import ball from "../assets/img/Ellipse-7.webp"


type SectionTitlePropsType = {
    color?: string;
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    ${font({family:"'Roboto',sans-serif", weight: 600, Fmax: 32, Fmin: 32, })};
    //font-weight: 600;
    //font-size: 32px;
    //line-height: 136%;
    text-align: center;
    color: ${(props) => props.color || Theme.colors.font};;
    position: relative;
    

    margin-bottom: 58px;
    
    &::before {
        content: "";
        background: url(${ball}) center top no-repeat;
        display: inline-block;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 50%;
        top: 45px;
        transform: translateX(-50%);
    }
    
    @media ${Theme.media.tablet} {
        margin-bottom: 40px;
    }
        &::before {
            bottom: -14px;
    }
`
