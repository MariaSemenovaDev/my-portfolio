import projectOne from "./../../../assets/img/Rectangle2.webp"
import projectTwo from "./../../../assets/img/Rectangle4.webp"
import projectThree from "./../../../assets/img/Rectangle5.webp"
import projectFour from "./../../../assets/img/Rectangle3.webp"
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {Link as RouterLink, useParams} from "react-router-dom";
import {Container} from "../../../components/Сontainer.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {projects} from "../../../data/projects.ts";
import {S} from "./Projects_Styles.ts";
import {ProjectPreviewMedia} from "./ProjectPreviewMedia.tsx";
import "../../../styles/slider.css"

const projectFallbackImages: Record<string, string> = {
    "unitygram": projectOne,
    "lavka-studenta": projectTwo,
    "hockey-analytics": projectThree,
    "flashcards-app": projectFour,
    "rick-and-morty": projectTwo,
    "todo-list": projectOne,
}

export const ProjectDetailsPage = () => {
    const {projectId} = useParams()
    const project = projects.find(item => item.id === projectId)

    if (!project) {
        return (
            <S.ProjectDetailsSection>
                <Container>
                    <S.BackRow>
                        <S.SecondaryButton as={RouterLink} to="/" state={{scrollTo: "projects"}}>
                            Back to projects
                        </S.SecondaryButton>
                    </S.BackRow>
                    <S.EmptyState>
                        <SectionTitle>Project Not Found</SectionTitle>
                        <S.ProjectsSubtitle>
                            The requested project does not exist or has not been added yet.
                        </S.ProjectsSubtitle>
                    </S.EmptyState>
                </Container>
            </S.ProjectDetailsSection>
        )
    }

    const fallbackImage = projectFallbackImages[project.id]
    const galleryItems = project.screenshots.length > 0
        ? project.screenshots.map(screenshot => (
            <S.ScreenshotCard key={`${project.id}-${screenshot.src}`}>
                <ProjectPreviewMedia
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fallbackImage={fallbackImage}
                    title={project.title}
                />
                {screenshot.caption && (
                    <S.ScreenshotCaption>{screenshot.caption}</S.ScreenshotCaption>
                )}
            </S.ScreenshotCard>
        ))
        : [
            <S.ScreenshotCard key={`${project.id}-fallback`}>
                <ProjectPreviewMedia
                    fallbackImage={fallbackImage}
                    alt={`${project.title} preview`}
                    title={project.title}
                />
            </S.ScreenshotCard>,
        ]

    return (
        <S.ProjectDetailsSection>
            <Container>
                <S.BackRow>
                    <S.SecondaryButton as={RouterLink} to="/" state={{scrollTo: "projects"}}>
                        Back to projects
                    </S.SecondaryButton>
                </S.BackRow>

                <SectionTitle>{project.title}</SectionTitle>

                <S.ProjectGallery>
                    <AliceCarousel
                        mouseTracking
                        touchTracking
                        infinite={galleryItems.length > 1}
                        disableButtonsControls
                        disableDotsControls={galleryItems.length < 2}
                        items={galleryItems}
                    />
                </S.ProjectGallery>

                <S.ProjectDetailsMain>
                        <S.RoleLine>{project.role}</S.RoleLine>
                        <S.TagsList>
                            {project.type.map(typeItem => (
                                <S.Tag key={typeItem}>{typeItem}</S.Tag>
                            ))}
                        </S.TagsList>

                        <S.DetailsText>{project.description}</S.DetailsText>


                        {project.stack.length > 0 && (
                            <S.InfoBlock>
                                <S.InfoTitle>Stack</S.InfoTitle>
                                <S.StackList>
                                    {project.stack.map(stackItem => (
                                        <S.StackChip key={stackItem}>{stackItem}</S.StackChip>
                                    ))}
                                </S.StackList>
                            </S.InfoBlock>
                        )}

                        <S.InfoBlock>
                            <S.InfoTitle>Highlights</S.InfoTitle>
                            <S.HighlightList>
                                {project.highlights.map(highlight => (
                                    <S.HighlightItem key={highlight}>{highlight}</S.HighlightItem>
                                ))}
                            </S.HighlightList>
                        </S.InfoBlock>

                        <S.InfoBlock>
                            <S.InfoTitle>Technical Details</S.InfoTitle>
                            <S.HighlightList>
                                {project.technicalDetails.map(detail => (
                                    <S.HighlightItem key={detail}>{detail}</S.HighlightItem>
                                ))}
                            </S.HighlightList>
                        </S.InfoBlock>

                        {(project.liveUrl || (project.githubUrls && project.githubUrls.length > 0)) && (
                            <S.ActionsRow>
                                {project.liveUrl && (
                                    <S.ProjectButton href={project.liveUrl} target="_blank" rel="noreferrer">
                                        Live
                                    </S.ProjectButton>
                                )}
                                {project.githubUrls?.map(link => (
                                    <S.SecondaryButton key={link.url} href={link.url} target="_blank" rel="noreferrer">
                                        {link.label}
                                    </S.SecondaryButton>
                                ))}
                            </S.ActionsRow>
                        )}
                </S.ProjectDetailsMain>
            </Container>
        </S.ProjectDetailsSection>
    )
}
