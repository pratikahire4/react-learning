import { useState, useContext } from "react";

import SpeakerToolBar from "./SpeakerToolBar"
import SpeakersList from "./SpeakersList"
import { ThemeContext } from "../contexts/ThemeProvider";

function Speakers() {
    const {theme, setTheme} = useContext(ThemeContext);
    const [showSession, setShowSession] = useState(true);
    return (
        <>
            <SpeakerToolBar theme={theme} setTheme={setTheme} showSession={showSession} setShowSession={setShowSession} />
            <SpeakersList showSession={showSession}  />
        </>
    )
}

export default Speakers;