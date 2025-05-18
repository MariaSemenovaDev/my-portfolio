import './App.css'
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

function App() {
    return (
        <div className="App">
            <Particle/>

            <Header/>
            <Main />
            <Projects />
            <Skills />
            <About />
            <Testimony/>
            <Contacts />
            <Footer />

            <GoTopBtn />
        </div>
    )
}

export default App
