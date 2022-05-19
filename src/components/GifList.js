import { useState, useEffect } from 'react'
import getGifs from "../services/getGifs"
import Gif from "./Gif"

// content

function ListGif({ keyword }) {
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        getGifs(keyword).then(giphyGifs => setGifs(giphyGifs))
    }, [keyword])

    return (
        <section>
            {/*<button onClick={() => setGifs(otherPandas)}>Change pandas</button>*/}
            <div className="row">
                {
                    gifs.map(gif => {
                        return <Gif key={gif.id} id={gif.id} title={gif.title} url={gif.url} />
                    })
                }
            </div>
        </section>        
    )
}

export default ListGif