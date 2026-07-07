import projectOne from "./../../../assets/img/Rectangle2.webp"
import projectTwo from "./../../../assets/img/Rectangle4.webp"
import projectThree from "./../../../assets/img/Rectangle5.webp"
import projectFour from "./../../../assets/img/Rectangle3.webp"
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Container} from "../../../components/Сontainer.ts";
import {S} from "./Projects_Styles.ts"
import {projects} from "../../../data/projects.ts";
import {ProjectCard} from "./project/Project.tsx";

const projectFallbackImages: Record<string, string> = {
    "unitygram": projectOne,
    "lavka-studenta": projectTwo,
    "hockey-analytics": projectThree,
    "flashcards-app": projectFour,
}

export const Projects: React.FC = () => {
    return (
        <S.Projects id={"projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <S.ProjectsSubtitle>
                    Product interfaces, CMS-driven websites, analytics dashboards and practice applications.
                </S.ProjectsSubtitle>

                <S.ProjectsWrapper wrap={"wrap"} justify="center" align="stretch" gap="38px">
                    {projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            fallbackImage={projectFallbackImages[project.id]}
                        />
                    ))}
                </S.ProjectsWrapper>
            </Container>
        </S.Projects>
    );
};
