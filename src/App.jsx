import { Header } from "./components/Header"
import { TimeLine } from "./components/TimeLine";
import { Projects } from "./components/Projects";
import useTheme from "./hooks/useTheme";
function App() {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <>
            <Header/>
            <TimeLine/>
            <Projects/>
        </>
    )
}

export default App
