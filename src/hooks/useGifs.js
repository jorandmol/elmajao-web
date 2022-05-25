import { useEffect, useState } from "react"
import { getGifs } from "../services/gifService"

export function useGifs({ keyword } = { keyword: null }) {
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const query = keyword || localStorage.getItem('lastKeyword') || 'pandas'     
        getGifs(query).then(
            giphyGifs => {
                setGifs(giphyGifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', query)
            }
        )
    }, [keyword])

    return {loading, gifs}
}