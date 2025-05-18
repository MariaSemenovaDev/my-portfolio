import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import {Link} from "../../../../components/Link.ts";
import {S} from "../Projects_Styles.ts"



type ProjectPropsType = {

    src: string;
    title: string,
    description: string,
    techStack?: string,

}


export const Project: React.FC <ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.ProjectImagePreview>
                <S.PreviewImg src={props.src} />
                <S.ProjectButton>View Project</S.ProjectButton>
            </S.ProjectImagePreview>
            <S.ProjectInfoPreview>
                <S.TitleProject>{props.title}</S.TitleProject>
                <S.DescriptionProject>{props.description} </S.DescriptionProject>
                <FlexWrapper gap={"30px"} align={"center"} justify={"center"}>
                    <S.ProjectButton href={"#"}>Live Preview</S.ProjectButton>
                    <Link href={"#"}>View Code</Link>
                </FlexWrapper>
            </S.ProjectInfoPreview>

        </S.Project>
    );
};


