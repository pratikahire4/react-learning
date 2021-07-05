import { ThemeProvider, ThemeContext } from "../contexts/ThemeProvider";
import { useContext } from "react";

function Layout({ selectedTheme, children }) {
    return (
        <ThemeProvider selectedTheme={selectedTheme}>
            <LayoutNoSetTheme>
                {children}
            </LayoutNoSetTheme>
        </ThemeProvider>
    )
}

function LayoutNoSetTheme({ children }) {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
            {children}
        </div>
    )
}

export default Layout;