import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Сontainer.ts";
import {Theme} from "../../../styles/Theme.tsx";

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony id={"testimony"}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction="column" align={"center"}>
                    <Icon iconId={"quote"} />
                    <Slider />
                </FlexWrapper>
            </Container>


        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
background-color: ${Theme.colors.secondaryBg};
`