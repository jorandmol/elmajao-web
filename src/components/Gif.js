import React from "react"
import { Link } from "wouter"

function Gif({ id, title, url}) {
    return <Link to={`gif/${id}`} className="col-md-3 border rounded text-center p-2 my-1 text-decoration-none text-reset m-auto">
        <img className="img-fluid m-auto" src={url} alt={title}/>
        <span className="d-block">{title}</span>
    </Link>
}

export default Gif