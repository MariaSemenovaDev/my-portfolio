import {Theme} from "../../../styles/Theme.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";

const Contact = styled.section`
`


const Form = styled.form`
    padding-top: 23px;
    max-width: 430px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 23px;
    margin: 0 auto;
    
    textarea {
        resize: none;
        height: 155px;
    }
`

const Field = styled.input`
    
    background-color: #f5f5f5;
    
    font-weight: 400;
    font-size: 16px;

    width: 100%;
    border: none;
    border-radius: 9px;
 
    padding: 10px 30px;
    font-family: Roboto, sans-serif;
    color: rgb(0, 0, 0);
    

    &::placeholder {
        color: #a5a5a5;
        text-transform: capitalize;
    }
    
    &:focus-visible {
        outline: 1px solid ${Theme.colors.accent};
        box-shadow: 0 0 30px 10px rgba(117, 114, 213, 0.1);
    }
`

const SocialIconsList = styled.ul`
    display: flex;
    gap: 20px;
    padding-bottom: 137px;
    
    @media ${Theme.media.tablet} {
        padding: 20px 0 10px;
    }

 `

const SocialItem = styled.li`


`

const SocialLink = styled.a`
    color: ${Theme.colors.accent};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 58px;
    height: 58px;
    position: relative;

    transition: ${Theme.animations.transition};

    &:hover {
        transform: translateY(-7px);
    }
    
    
`


const ContactCard = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: rgba(0, 0, 0, 0.05) 8px 8px 34px 0px;
    max-width: 932px;
    width: 100%;
    background-color: white;

    span {
        color: rgb(0, 0, 0);
        font-size: 36px;
        font-weight: 500;
        text-align: left;
        white-space: nowrap;
    }

    @media ${Theme.media.tablet} {
        box-shadow: none;
        background-color: transparent;
        flex-direction: column;
        gap: 42px;
    }

`
const FormSection = styled.div`
         flex: 2;
        flex-shrink: 1;
         display: flex;
         flex-direction: column;
        padding: 0 5%;
        background-color: white;

         @media (max-width: 768px) {
             width: 82%;
             padding: 5% 10%;
             box-shadow: 8px 8px 34px 0 rgba(0, 0, 0, 0.05);
             span {
                 text-align: left;
             }
         }
`
const ContactSection = styled(FlexWrapper)`
    flex: 1;
    flex-shrink: 6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding: 0 2%;
    background-color: white;

    @media ${Theme.media.tablet} {
        width: 82%;
        padding: 5% 10%;
        box-shadow: 15px 15px 65px 0 rgba(0, 0, 0, 0.05);
        gap: 44px;
    }
`



const ContactWrapper = styled.div`
    display: flex;
    flex-flow: column;
    place-content: stretch space-around;
    align-items: center;
    align-self: auto;
    gap: 65px;
    height: 100%;
    
    position: relative;
`


export const S = {
    Contact,
    Form,
    Field,
    SocialIconsList,
    SocialItem,
    SocialLink,
    ContactCard,
    FormSection,
    ContactSection,
    ContactWrapper,
}