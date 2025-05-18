import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {Container} from "../../components/Сontainer.ts";
import {S} from "./Footer_Styles.ts";

export const Footer: React.FC = () => {


    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction="column" align="center"  justify="space-around" gap="7px">
                    <S.Name>Semenova Maria</S.Name>
                    <S.Mail>All Rights Reserved 2025@</S.Mail>
                </FlexWrapper>

            </Container>

        </S.Footer>
    );
};


