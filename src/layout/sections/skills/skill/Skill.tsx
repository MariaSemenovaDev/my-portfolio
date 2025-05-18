import {Icon} from "../../../../components/icon/Icon";
import {Theme} from "../../../../styles/Theme.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import {S} from "../Skills_Styles.ts";

type SkillPropsType = {
    iconId: string;
    title: string;
    // description?: string;

}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={props.iconId} width="50" height="50" viewBox="0 0 50 50" color={Theme.colors.accent}/>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                {/*<S.SkillDescription>{props.description}</S.SkillDescription>*/}
            </FlexWrapper>
        </S.Skill>
    );
};

