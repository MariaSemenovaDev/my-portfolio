import {Link as RouterLink} from "react-router-dom";
import {S} from "../Projects_Styles.ts"
import {Project} from "../../../../data/projects.ts";
import {ProjectPreviewMedia} from "../ProjectPreviewMedia.tsx";

type ProjectCardProps = {
    project: Project
    fallbackImage: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({project, fallbackImage}) => {
    const primaryGithubUrl = project.githubUrls?.[0]?.url
    const previewSrc = project.screenshots[0]?.src
    const highlights = project.highlights.slice(0, 3)

    return (
        <S.ProjectCard>
            <S.ProjectImagePreview>
                <ProjectPreviewMedia
                    src={previewSrc}
                    alt={project.screenshots[0]?.alt || `${project.title} preview`}
                    fallbackImage={fallbackImage}
                />
                <S.PreviewOverlay>
                    <S.ProjectButton as={RouterLink} to={`/projects/${project.id}`}>
                        Details
                    </S.ProjectButton>
                </S.PreviewOverlay>
            </S.ProjectImagePreview>

            <S.ProjectInfoPreview>
                <S.TitleProject>{project.title}</S.TitleProject>

                <S.TagsList>
                    {project.type.map(typeItem => (
                        <S.Tag key={typeItem}>{typeItem}</S.Tag>
                    ))}
                </S.TagsList>

                <S.DescriptionProject>{project.description}</S.DescriptionProject>

                {project.stack.length > 0 && (
                    <S.StackList>
                        {project.stack.map(stackItem => (
                            <S.StackChip key={stackItem}>{stackItem}</S.StackChip>
                        ))}
                    </S.StackList>
                )}

                <S.HighlightList>
                    {highlights.map(highlight => (
                        <S.HighlightItem key={highlight}>{highlight}</S.HighlightItem>
                    ))}
                </S.HighlightList>

                <S.ActionsRow>
                    <S.ProjectButton as={RouterLink} to={`/projects/${project.id}`}>
                        Details
                    </S.ProjectButton>
                    {project.liveUrl && (
                        <S.ProjectButton href={project.liveUrl} target="_blank" rel="noreferrer">
                            Live
                        </S.ProjectButton>
                    )}
                    {primaryGithubUrl && (
                        <S.SecondaryButton href={primaryGithubUrl} target="_blank" rel="noreferrer">
                            GitHub
                        </S.SecondaryButton>
                    )}
                </S.ActionsRow>
            </S.ProjectInfoPreview>
        </S.ProjectCard>
    );
};
