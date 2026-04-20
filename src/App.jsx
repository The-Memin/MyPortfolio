import { Header } from "./components/Header"
import { TimeLine } from "./components/TimeLine";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Skills } from "./components/Skills";
import useTheme from "./hooks/useTheme";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
function App() {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <>
            <main>
                <Header/>
                <TimeLine/>
                <Projects/>
                <Skills/>
                <About/>
            </main>
            <Footer/>
        </>
    )
}

export default App
