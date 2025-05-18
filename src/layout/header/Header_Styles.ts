import styled from "styled-components";
import {Theme} from "../../styles/Theme.tsx";

type HeaderPropsType = {
    isScrolled: boolean;
}


const Header = styled.header<HeaderPropsType>`
    
    background-color: ${({ isScrolled }) => (isScrolled ? "white" : "transparent")};
    position: fixed;
    padding: 33px 15px 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999999;
    
    box-shadow: ${({ isScrolled }) => (isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none")};;
    
    @media ${Theme.media.tablet} {
        padding: 15px 10px 10px;
    }
`

export const S = {
    Header,
}