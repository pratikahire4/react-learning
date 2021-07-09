import { useState } from "react";

function useSpeakerFilter(startingState = false, startingEventYear) {
    const [showSession, setShowSession] = useState(startingState)
    const [searchQuery, setSearchQuery] = useState(startingEventYear)
    const [eventYear, setEventYear] = useState("")

    const EVENT_YEARS = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"]

    return {
        showSession,
        setShowSession,
        searchQuery,
        setSearchQuery,
        eventYear,
        setEventYear,
        EVENT_YEARS
    }
}

export default useSpeakerFilter;