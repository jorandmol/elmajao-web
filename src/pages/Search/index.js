import GifList from "../../components/GifList"
import { useGifs } from "../../hooks/useGifs"

function Search({ params }) {
    const { keyword } = params
    const { loading, gifs } = useGifs({ keyword })

    return loading ? <h3>Cargando...</h3> : <GifList gifs={gifs} />
}

export default Search