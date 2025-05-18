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

                            <S.AboutMe>Passionate front-end developer with a flair for crafting engaging user interfaces that provide users with an intuitive and efficient experience. Committed to writing clean, scalable code and staying abreast of the latest technologies in web development</S.AboutMe>
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

