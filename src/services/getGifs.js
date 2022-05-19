const apiKey = process.env.REACT_APP_API_KEY

const getGifs = ({keyword = 'pandas'} = {}) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
    return fetch(apiURL)
        .then(res => res.json())
        .then(jsonRes => {
            const data = jsonRes.data
            const gifs = data.map(image => {
                const { id, title, images } = image 
                const { url } = images.downsized_medium
                return { id, title, url }
            })
            return gifs
        })
}

export default getGifs