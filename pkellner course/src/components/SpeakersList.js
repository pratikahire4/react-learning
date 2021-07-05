import ReactPlaceholder from "react-placeholder/lib";

import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";

import Speaker from "./Speaker";

import { data } from "../../SpeakerData"

function SpeakersList({ showSession }) {

    const {data: speakersData, requestStatus, error, updateRecord} = useRequestDelay(500, data);

    if(requestStatus === REQUEST_STATUS.ERROR) {
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
                {speakersData.map(function (speaker) {
                    return (
                        <Speaker key={speaker.id} speaker={speaker} showSession={showSession} onFavoriteToggle={(doneCallBack) => {
                            updateRecord({
                                ...speaker,
                                favorite : !speaker.favorite
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