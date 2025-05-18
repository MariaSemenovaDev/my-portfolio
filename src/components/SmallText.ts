import styled from "styled-components";
import {Theme} from "../styles/Theme.tsx";

type SmallTextPropsType = {
    color?: string;
}

export const SmallText = styled.p<SmallTextPropsType>`
    margin-bottom: 30px;
    font-family: "Vollkorn",'Manrope',sans-serif;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: ${(props) => props.color || Theme.colors.font};;
`