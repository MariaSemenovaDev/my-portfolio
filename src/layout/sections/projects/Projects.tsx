import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Project} from "./project/Project";
import projectOne from "./../../../assets/img/Rectangle2.webp"
import projectTwo from "./../../../assets/img/Rectangle4.webp"
import projectFree from "./../../../assets/img/Rectangle5.webp"
import projectFour from "./../../../assets/img/Rectangle3.webp"
import {Container} from "../../../components/Сontainer.ts";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu.tsx";
import {S} from "./Projects_Styles.ts"
import {useState} from "react";
import {AnimatePresence, motion } from "motion/react"


const tabsItems: Array<{status: TabsStatusType, title: string }> = [
    {
        title: "All",
        status: "all",
    },
    {
        title: "Landing page",
        status: "landing",
    },
    {
        title: "React",
        status: "react",
    },
    {
        title: "Spa",
        status: "spa",
    }
]

const projectsData = [
    {
        src: projectOne,
        title: "Social Network",
        description:"Social Network is an online platform that allows people to create an account and interact with other people on the website. Users can build there virtual world on the site, make friends and share their thoughts and ideas by writing a post.",
        techStack:"HTML , JavaScript, SASS, React",
        type: "spa",
        id: 1,
    },
    {
        src: projectTwo,
        title: "ToDo List",
        description:"ToDo List is an online platform for organizing your personal or work tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management.",
        techStack:"HTML , JavaScript, SASS, React",
        type: "react",
        id: 2,
    },
    {
        src: projectFree,
        title: "Counter",
        description:"Counter is a test project which (to tell the truth) doesn't have a lot of practical use. It allows to do some settings which influence on the way how the counter works.",
        techStack:"HTML , JavaScript, SASS, React",
        type: "landing",
        id: 3,
    },
    {
        src: projectFour,
        title: "Portfolio",
        description:"Lorem ",
        techStack:"HTML , JavaScript, SASS, React",
        type: "react",
        id: 4,
    },

]

export const Projects: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredProjects = projectsData

    if (currentFilterStatus === "landing") {
        filteredProjects = projectsData.filter(project => project.type === "landing")
    }
    if (currentFilterStatus === "react") {
        filteredProjects = projectsData.filter(project => project.type === "react")
    }
    if (currentFilterStatus === "spa") {
        filteredProjects = projectsData.filter(project => project.type === "spa")
    }

    function  changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Projects id={"projects"}>
            <Container>
                <SectionTitle>My projects</SectionTitle>

                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus}
                                                currentFilterStatus={currentFilterStatus}/>

                <S.ProjectsWrapper wrap={"wrap"} justify="center" align="flex-start" gap="38px">

                    <AnimatePresence>
                        {filteredProjects.map((p) => {
                            return (
                                        <motion.div style={{width: '540px',
                                            flexGrow:1, maxWidth: '540px'}}
                                            layout
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            key={p.id}
                                        >
                                            <Project src={p.src}
                                                     key={p.id}
                                                     title={p.title}
                                                     description={p.description}
                                                     techStack={p.techStack}/>
                                        </motion.div>
                            )

                        })}
                    </AnimatePresence>
                </S.ProjectsWrapper>
            </Container>
        </S.Projects>
    );
};



