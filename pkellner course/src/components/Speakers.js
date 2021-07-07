import SpeakerToolBar from "./SpeakerToolBar"
import SpeakersList from "./SpeakersList"
import { SpeakerFilterProvider } from "../contexts/SpeakerFilterContext";

function Speakers() {
    return (
        <SpeakerFilterProvider startingShowState={false}>
            <SpeakerToolBar />
            <SpeakersList />
        </SpeakerFilterProvider>
    )
}

export default Speakers;