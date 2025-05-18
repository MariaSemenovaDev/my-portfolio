
import {Icon} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import styled from "styled-components";

type ContactPropsType = {
    iconId?: string;
    title?: string;
    description?: string;
    href?: string;
}

export const Contact = (props: ContactPropsType) => {
    return (
        <StyledContact gap="26px">
                <Icon iconId={props.iconId} width="38" height="38" viewBox="0 0 38 38"/>
            <FlexWrapper direction={"column"}>
                <h4>{props.title}</h4>
                <a href={props.href}>{props.description}</a>
            </FlexWrapper>
        </StyledContact>
    );
};

const StyledContact = styled(FlexWrapper)`
    //border: 1px solid #57b538;
    width: 250px;

    h4 {
        text-align: left;
        font-weight: 500;
        font-size: 16px;
        line-height: 136%;
    }

    span {
        text-align: left;
        font-weight: 400;
        font-size: 12px;
        line-height: 136%;
        color: #8b8b8b;
    }
    

`