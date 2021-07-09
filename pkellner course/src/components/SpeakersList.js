import { useContext } from "react";
import ReactPlaceholder from "react-placeholder/lib";

import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";

import Speaker from "./Speaker";

import { data } from "../../SpeakerData"

function SpeakersList() {

    const { data: speakersData, requestStatus, error, updateRecord } = useRequestDelay(500, data);
    const { searchQuery, eventYear } = useContext(SpeakerFilterContext)

    if (requestStatus === REQUEST_STATUS.ERROR) {
        return (
            <div className="text-danger">
                Error: <b>An error has occurred. {error}</b>
            </div>
        )
    }

    //if(isLoading) { return (<div>Loading</div>)}

    return (
        <div className="container speakers-list">
            <ReactPlaceholder type="media" rows={4} ready={requestStatus === REQUEST_STATUS.SUCCESS} className="speakerslist-placeholder">
                <div className="row">
                    {speakersData.filter(function (speaker) {
                        return (speaker.first.toLowerCase().includes(searchQuery) || speaker.last.toLowerCase().includes(searchQuery))
                    }).filter((speaker) => {
                        return speaker.sessions.find((session) => {
                            return session.eventYear === eventYear
                        })
                    })
                        .map(function (speaker) {
                            return (
                                <Speaker key={speaker.id} speaker={speaker} onFavoriteToggle={(doneCallBack) => {
                                    updateRecord({
                                        ...speaker,
                                        favorite: !speaker.favorite
                                    }, doneCallBack)
                                }} />
                            )
                        })}
                </div>
            </ReactPlaceholder>
        </div>
    )
}

export default SpeakersList;