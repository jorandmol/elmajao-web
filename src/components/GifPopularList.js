import { Link } from "wouter"

function GifPopularList({ popular_gifs }) {
    return (
        <div className="row py-3 px-2">
            <h5 className="d-block">Más virales</h5>
            {popular_gifs.map(item => {
                return <Link key={item} to={`/search/${item}`}>Gifs de {item}</Link>
            })}
        </div>
    )
}

export default GifPopularList