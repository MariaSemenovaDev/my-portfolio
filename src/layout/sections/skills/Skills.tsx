import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Сontainer.ts";
import {SmallText} from "../../../components/SmallText.ts";
import {S} from "./Skills_Styles.ts";
import styled from "styled-components";
import {Theme} from "../../../styles/Theme.tsx";
import { Fade } from "react-awesome-reveal";

const skillData = [
    {
        iconId: "code",
        title:"HTML 5",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
},
    {
        iconId: "css",
        title:"CSS 3",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "react",
        title:"React",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "typescript",
        title:"Type Script",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "styledComponents",
        title:"Styled Components",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "figma",
        title:"Figma",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
]

export const Skills: React.FC = () => {
    return (
        <S.SectionSkills id={"skills"}>
            <Container>
                <SectionTitle color="white">My skills</SectionTitle>
                <SmallText color="white">I work in such programs as</SmallText>
                <SkillsWrapper>
                    <Fade cascade={true} damping={0.3}>
                        {skillData.map((s, index) => {
                            return <Skill iconId={s.iconId} key={index}
                                          title={s.title} description={s.description}/>
                        })}
                    </Fade>
                </SkillsWrapper>
            </Container>

        </S.SectionSkills>
    );
};


const SkillsWrapper = styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Колонки адаптируются */
    gap: 40px;
    justify-content: center;

    @media ${Theme.media.tablet} {
        display: flex;
        flex-wrap: wrap;
        justify-content: center; /* Верхний ряд по центру */
        align-items: flex-start;

        & > *:nth-last-child(-n + 3) {
            align-self: flex-start; /* Последние три элемента идут влево */
        }
    }
`
