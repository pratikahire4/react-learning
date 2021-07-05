import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
    SUCCESS:"success",
    LOADING:"loading",
    ERROR:"error"
}

function useRequestDelay(delayTime = 1000, initialData=[]) {
    const [data, setData] = useState(initialData);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    const delay = (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}

    useEffect(() => {
        async function delayFunk() {
            try {
                await delay(delayTime)
                //throw "my boy"
                setRequestStatus(REQUEST_STATUS.SUCCESS)
                setData(data)
            } catch (e) {
                console.log(e)
                setRequestStatus(REQUEST_STATUS.ERROR)
                setError("Error occurred.")
            }
        }
        delayFunk()
    })

    function updateRecord(updatedRecord, doneCallBack) {
        const newRecords = data.map((rec) => { return rec.id === updatedRecord.id ? updatedRecord : rec })

        async function delayFunk() {
            try {
                await delay(delayTime)
                if(doneCallBack) {
                    doneCallBack()
                }
                setData(newRecords)
            } catch (error) {
                console.log("Something went wrong.", error)
            }
        }
        delayFunk()
    }

    return {data, requestStatus, error, updateRecord}
}

export default useRequestDelay;