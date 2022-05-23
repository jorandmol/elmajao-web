import { useState, useEffect } from 'react'
import { getGifs } from "../services/gifService"
import Gif from "../components/Gif"

function GifList({ params }) {
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)
    const { keyword = 'pandas' } = params

    useEffect(() => {
        setLoading(true)
        getGifs(keyword).then(
            giphyGifs => {
                setGifs(giphyGifs)
                setLoading(false)
            }
        )
    }, [keyword])

    if (loading) {
        return <h3>Cargando...</h3>
    }

    return (
        <section>
            <div className="row">
                {gifs.map(gif => {
                    return <Gif key={gif.id} id={gif.id} title={gif.title} url={gif.url} />
                })}
            </div>
        </section>        
    )
}

export default GifList