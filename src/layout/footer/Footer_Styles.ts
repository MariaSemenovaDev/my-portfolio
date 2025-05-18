import styled from "styled-components";
import {Theme} from "../../styles/Theme.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {font} from "../../styles/Common.tsx";
import wave from "../../assets/img/wave.webp"

const Footer = styled.footer`
    background-color: rgb(166, 188, 250);
    position: relative;
    z-index: -1;
    margin-top: 50px;
    padding: 40px 0;
&::before {
    content: "";
    position: absolute;
    background: url(${wave}) center top repeat-x;
    width: 100%;
    height: 100%;
    top: -50px;
    z-index: -2;
}
    
    @media ${Theme.media.tablet} {
        ${FlexWrapper} {
            flex-direction: column;
        }
    }
    
`

const Name = styled.span`
    ${font({family: "'Roboto',sans-serif", weight: 700, Fmax: 16, Fmin: 16,})};
    color: #fff;
`

const Mail = styled.span`
    ${font({family: "'Roboto',sans-serif", weight: 400, Fmax: 11, Fmin: 11,})};
    padding-bottom: 15px;

    color: #fff;
`



export const S = {
    Footer,
    Name,
    Mail,

}
