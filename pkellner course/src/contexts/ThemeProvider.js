import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({selectedTheme, children}) {
    const [theme, setTheme] = useState(selectedTheme)

    return (
        <ThemeContext.Provider value={{setTheme, theme}}>
                {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider };