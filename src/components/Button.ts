import styled from "styled-components";
import {Theme} from "../styles/Theme.tsx";

export const Button = styled.button`

    border-radius: 9px;
    background-color: #2350d6;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 136%;
    text-align: center;
    color: #fff;
    padding: 11px 40px;
    margin-bottom: 8%;

    cursor: pointer;

    &:hover {
        background: linear-gradient(-45deg, #2157F2, #4975f4);
        transform: translateY(-3px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        transition: ${Theme.animations.transition};
    }

    /* Эффекты при нажатии */

    &:active {
        transform: translateY(0);
    }
`