import styled from "styled-components";
import {Theme} from "../../styles/Theme.tsx";
import {font} from "../../styles/Common.tsx";

const Slider = styled.div`

    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    //border: 1px solid red;
`

const Slide = styled.div`
    width: 100%;
    height: fit-content;

    border-radius: 100px 0;
    padding: 40px 20px;

    backdrop-filter: blur(5px);
    background: linear-gradient(132deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 71, 255, 0.15) 100%);
    border: 2px solid ${Theme.colors.primaryBg};

    position: relative;
    text-align: center;
    &::before {
        content: '';
        display: inline-block;
        width: 60px;
        height: 1px;
        background: ${Theme.colors.accent};
        position: absolute;
        bottom: 27%;
        left: 45%;
    }

    @media ${Theme.media.tablet} {
        justify-content: center;
        align-items: stretch;
    }

    @media ${Theme.media.mobile} {
        margin-top: 20px;
        border-radius: 112px 0;
        &::before {
            display: none;
        }
    }

    
`

const Text = styled.p`
    ${font({family:"Roboto, sans-serif", weight: 400, color: '#393939', lineHeight: 1.4, Fmax: 24, Fmin: 20})};
    text-align: center;
    margin-bottom: 15px;
`

const Name = styled.span`
    ${font({family:"Roboto, sans-serif", weight: 600, color: '#393939', lineHeight: 1.4, Fmax: 26, Fmin: 20})};
    text-align: center;

`

const Pagination = styled.div`

    margin-top: 15px;
    display: flex;
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        margin: 5px;
        background: rgba(225, 225, 225, 0.5);
        border-radius: 20px;

        & + span {
            margin-left: 5px;
        }
        
        &.active {
            background-color: ${Theme.colors.accent};
            width: 20px;
        }
    }
`

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination,
}