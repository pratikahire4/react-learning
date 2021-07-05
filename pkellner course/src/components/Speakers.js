import { useState } from "react";

import SpeakerToolBar from "./SpeakerToolBar"
import SpeakersList from "./SpeakersList"

function Speakers({theme, setTheme}) {
    const [showSession, setShowSession] = useState(true);
    return (
        <>
            <SpeakerToolBar theme={theme} setTheme={setTheme} showSession={showSession} setShowSession={setShowSession} />
            <SpeakersList showSession={showSession}  />
        </>
    )
}

export default Speakers;