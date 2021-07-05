import { useState, useEffect } from "react";

import Speaker from "./Speaker";

import { data } from "../../SpeakerData"

function SpeakersList({ showSession }) {

    const [speakersData, setSpeakersData] = useState([]);

    const delay = (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}

    useEffect(() => {
        async function delayFunk() {
            await delay(1599)
            setSpeakersData(data)
        }
        delayFunk()
    })

    function onFavoriteToggle(id) {
        const currentSpeakerRecord = speakersData.find((rec) => { return rec.id == id })

        const newSpeakerRecord = { ...currentSpeakerRecord, favorite : !currentSpeakerRecord.favorite}

        const newSpeakerData = speakersData.map((rec) => {
            return rec.id === id ? newSpeakerRecord : rec
        })

        setSpeakersData(newSpeakerData);
    }

    return (
        <div className="container speakers-list">
            <div className="row">
                {speakersData.map(function (speaker) {
                    return (
                        <Speaker key={speaker.id} speaker={speaker} showSession={showSession} onFavoriteToggle={() => {
                            onFavoriteToggle(speaker.id)
                        }} />
                    )
                })}
            </div>
        </div>
    )
}

export default SpeakersList;