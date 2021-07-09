import { createContext } from "react";

import useSpeakerFilter from "../hooks/useSpeakerFilter";

const SpeakerFilterContext = createContext()

function SpeakerFilterProvider({ startingShowState, children }) {
    const { showSession,
        setShowSession,
        searchQuery,
        setSearchQuery,
        eventYear,
        setEventYear,
        EVENT_YEARS
    } = useSpeakerFilter(startingShowState, "2010")

    return (
        <SpeakerFilterContext.Provider value={{
            showSession, setShowSession, searchQuery,
            setSearchQuery, eventYear, setEventYear, EVENT_YEARS
        }}>
            {children}
        </SpeakerFilterContext.Provider>
    )
}

export { SpeakerFilterContext, SpeakerFilterProvider }