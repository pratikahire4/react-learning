import { useState, useEffect } from "react";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch(url) {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(function () {
        async function getData() {
            try {
                const response = await fetch(baseUrl + url)

                if (response.ok) {
                    const respJson = await response.json()
                    setData(respJson)
                } else {
                    throw response
                }
            } catch (e) {
                setError(e)
            } finally {
                setLoading(false)
            }
        }

        getData()
    }, [url])

    return {
        data, loading, error
    }

}