import React, { useState } from "react";
import { useLocation } from "wouter"
import GifList from "../../components/GifList";
import GifPopularList from "../../components/GifPopularList";
import { useGifs } from "../../hooks/useGifs";

const popular_gifs = ["dogs", "cats", "turtles", "giraffes"]

function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const { loading, gifs } = useGifs()

  const handleFormSubmit = event => {
    event.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = event => {
    setKeyword(event.target.value)
  }

  return (
    <div className="container-fluid">
      <div className="row py-3 px-2">
        <div className="col-8 col-md-4 offset-2 offset-md-4">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group row">
              <div className="col-sm-10">
                <input type="text" className="form-control" onChange={handleChange} value={keyword} placeholder="Busca un tema..." />
              </div>
              <div className="col-sm-2">
                <button type="submit" className="btn btn-outline-primary">
                  Buscar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row py-3 px-2">
        <h5 className="d-block">Buscado recientemente</h5>
        {loading ? <h3>Cargando...</h3> : <GifList gifs={gifs}/>}
      </div>
      <GifPopularList popular_gifs={popular_gifs} />
    </div>
  )
}

export default Home