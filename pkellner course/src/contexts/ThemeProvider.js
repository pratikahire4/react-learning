import React, { createContext, useState } from "react";

import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext();

function ThemeProvider({selectedTheme, children}) {
    const {theme, setTheme} = useTheme(selectedTheme)

    return (
        <ThemeContext.Provider value={{setTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider };