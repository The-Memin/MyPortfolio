import { Header } from "./components/Header"
import { TimeLine } from "./components/TimeLine";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import useTheme from "./hooks/useTheme";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
function App() {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <>
            <main>
                <Header/>
                <TimeLine/>
                <Projects/>
                <About/>
            </main>
            <Footer/>
        </>
    )
}

export default App
