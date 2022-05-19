function Gif({ id, title, url}) {
    return <a href={`#${id}`} className="col-md-3 border rounded text-center p-2 my-1 text-decoration-none text-reset">
        <img className="img-fluid" src={url} alt={title}/>
        <span className="d-block">{title}</span>
    </a>
}

export default Gif