import dekstopPhoto from "../../../assets/img/Photo.webp";
import {Container} from "../../../components/Сontainer.ts";
import {S} from "./Main_Styles.ts"
import {Apps} from "./apps/Apps.tsx";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';




export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <S.MainWrapper>
                    <S.CardWrapper align={"center"} justify={"center"} gap="76px" wrap="wrap">
                        <Tilt>
                            <S.Photo src={dekstopPhoto} alt=""/>
                        </Tilt>

                        <S.InfoWrapper>
                            <div>
                                <S.MyName>I'm <span>Maria Semenova</span></S.MyName>
                            </div>
                            <S.MainTitle>
                                <p>Front-End Developer</p>
                                <Typewriter
                                    options={{
                                        strings: ['Front-End Developer'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 150,
                                    }}
                                />
                            </S.MainTitle>

                            <S.AboutMe>
                                Frontend Developer specializing in React, Next.js and TypeScript. I build product-oriented web interfaces with authentication, forms, user profiles, feeds, admin panels, CMS-driven content and API integrations. I focus on clean component architecture, responsive layouts, typed data flow and maintainable UI that solves real user tasks.
                            </S.AboutMe>
                            <S.ButtonWrapper align="center" justify="center"  gap="32px">
                                <S.Button href="">See Projects</S.Button>
                                <S.Download href="">Download Resume</S.Download>
                            </S.ButtonWrapper>
                        </S.InfoWrapper>
                    </S.CardWrapper>
                </S.MainWrapper>


                    <Apps/>

            </Container>
        </S.Main>
    );
};

