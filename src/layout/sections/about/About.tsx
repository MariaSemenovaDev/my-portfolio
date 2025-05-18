
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Сontainer.ts";
import {font} from "../../../styles/Common.tsx";
import {Theme} from "../../../styles/Theme.tsx";
import dots from "../../../assets/img/Dots.webp"

export const About: React.FC = () => {
    return (
        <StyledAbout id={"about"}>
            <Container>
                <AboutWrapper>
                    <SectionTitle>About me</SectionTitle>
                    <FlexWrapper direction="column" align={"center"} gap={"30px"}>

                        <AboutText>I'm Frontend-Developer from Russia.<br/> I'm passionate about coding and everything related<br/> to web technologies.<br/><br/>
                         I'm currently mastering frontend development and refining<br/> my skills in JavaScript, React, and UI/UX principles.<br/><br/>
                        Excited to create functional and visually appealing<br/>  web experiences with great teams.</AboutText>
                    </FlexWrapper>

                </AboutWrapper>

            </Container>


        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    position: relative;
    
    overflow: hidden;
    &::after {
        content: url(${dots});
        width: 50%;
        //height: 505px;
        display: inline-block;
        position: absolute;
        z-index: -4;
        top: 70px;
        right: 0%;
    }

    @media ${Theme.media.mobile} {
    &::after {
        display: none;
    }
    }
`

const AboutText = styled.p`
    ${font({family:"Roboto, sans-serif", weight: 400, color: '#393939', lineHeight: 1.4, Fmax: 24, Fmin: 18})};
    text-align: center;

`

const AboutWrapper = styled.div`

`