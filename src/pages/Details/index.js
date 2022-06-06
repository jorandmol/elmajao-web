import React, { useEffect, useState } from "react"
import GifDetails from "../../components/GifDetails"
import { getGifById } from "../../services/gifService"

function Details({ params }) {
    const [gif, setGif] = useState({})
    const [loading, setLoading] = useState(false)
    const { gifId } = params

    useEffect(() => {
        setLoading(true)
        getGifById(gifId).then(
            giphy => {
                setGif(giphy)
                setLoading(false)
            }
        )
    }, [gifId])

    if (loading) {
        return 
    }
    return loading ? <h3>Cargando el gif...</h3> : <GifDetails gif={gif} />
}

export default Details