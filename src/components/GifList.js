import React from "react"
import Gif from "../components/Gif"

function GifList({ gifs }) {

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