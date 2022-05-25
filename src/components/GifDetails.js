function GifDetails({ gif }) {
    const uploadDate = new Date(gif.import_datetime)

    return (
        <div className="row my-1 p-2">
            <div className='col-8 offset-2'>
                <div className='row'>
                    <h3>{gif.title}</h3>
                </div>
                <div className="row">
                    <img className='img-fluid rounded px-0' src={gif.imgUrl} alt={gif.title}/>
                </div>
                <div className="row border rounded mt-2">
                    <span className='d-block'>Creado por {gif.username}</span>
                    <span className='d-block'>Subido el {uploadDate.toLocaleDateString('es')}</span>
                    <span className='d-block'>Pulsa <a href={gif.url} target="_blank" rel="noreferrer">aquí</a> para obtener más información</span>
                </div>
            </div>
        </div>
    )
}

export default GifDetails