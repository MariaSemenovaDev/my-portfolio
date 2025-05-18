import styled, {css} from "styled-components";
import {Theme} from "../styles/Theme.tsx";

export const Link = styled.a<{active?: boolean}>`
        font-weight: 400;
        font-size: 20px;
        line-height: 136%;
        color: #1f1f1f;

        &:hover {
            color: ${Theme.colors.accent};
        }


        ${props => props.active && css<{active?: boolean}>`
            //background-color: #a6bcfa;
            color: ${Theme.colors.accent};
    ` }

    
`