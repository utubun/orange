import { useEffect, useState } from "react"
import { Navbar } from "../../components/navbar/Navbar";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

export const Home = () => {
    const [ theme, setTheme ] = useState('dark');

    const classed = () => {
        console.log(theme)
       return theme === 'dark' ?  'bp4-dark' : 'bp4-light'
    };

    useEffect(() => {
        document.body.className = `bp4-card ${classed()}`
    }, [theme])

    const switchTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        console.log(theme)
    }

    return (
        <div>
            <Navbar switchTheme={switchTheme} />
            <div>
            <h2>The Home Page</h2>
            <p>The theme used: {theme}</p>
            <p>Container is classed as {classed()}</p>
            </div>
        </div>
    )



}