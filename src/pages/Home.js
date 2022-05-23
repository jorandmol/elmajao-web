import { Link } from "wouter"

function Home() {

  const handleFormSubmit = (event) => {
    const target = event.target
    event.preventDefault()
    const query = target.elements["query"].value
    window.location.href = `/${query}`
  }

  return (
    <div className="container-fluid">
      <div className="row py-3 px-2">
        <Link to="/pandas">Gifs de panditas</Link>
        <Link to="/turtles">Gifs de tortuguitas</Link>
        <Link to="/jirafas">Gifs de jirafitas</Link>
      </div>
      <div className="row py-3 px-2">
        <div className="col-4 offset-4">
          <span>O busca los tuyos</span>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group row">
              <div className="col-sm-10">
                <input type="text" className="form-control" name="query" placeholder="Ponme algo aquí..."></input>
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
    </div>
  )
}

export default Home