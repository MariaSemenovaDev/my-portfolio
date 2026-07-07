import './App.css'
import {useEffect} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn.tsx";
import {Testimony} from "./layout/sections/testimony/Testimony.tsx";
import {About} from "./layout/sections/about/About.tsx";
import {Particle} from "./components/particle/Particle.tsx";
import {ProjectDetailsPage} from "./layout/sections/projects/ProjectDetailsPage.tsx";

const HomePage = () => {
    const location = useLocation()

    useEffect(() => {
        if (location.state?.scrollTo === "projects") {
            document.getElementById("projects")?.scrollIntoView({behavior: "smooth", block: "start"})
        }
    }, [location.state])

    return (
        <>
            <Header/>
            <Main />
            <Projects />
            <Skills />
            <About />
            <Testimony/>
            <Contacts />
            <Footer />
            <GoTopBtn />
        </>
    )
}

const ProjectPage = () => {
    return (
        <>
            <Header/>
            <ProjectDetailsPage />
            <Footer />
            <GoTopBtn />
        </>
    )
}

function App() {
    return (
        <div className="App">
            <Particle/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects/:projectId" element={<ProjectPage />} />
            </Routes>
        </div>
    )
}

export default App
