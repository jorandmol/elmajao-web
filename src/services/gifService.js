import { apiKey, apiURL } from "./config"

export const getGifs = (keyword) => {
    const endpoint = `${apiURL}search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
    return fetch(endpoint)
        .then(res => res.json())
        .then(jsonRes => {
            const data = jsonRes.data
            console.log({ data })
            const gifs = data.map(image => {
                const { id, title, images } = image 
                const { url } = images.downsized_medium
                return { id, title, url }
            })
            return gifs
        }
    )
}

export const getGifById = (gifId) => {
    const endpoint = `${apiURL}${gifId}?api_key=${apiKey}`
    return fetch(endpoint)
        .then(res => res.json())
        .then(jsonRes => {
            const { data } = jsonRes
            const { id, url, username, title, import_datetime } = data
            const { downsized_large } = data.images
            const { height: imgHeight, width: imgWidth, size: imgSize, url: imgUrl } = downsized_large
            return {
                id, url, username, title, import_datetime, imgHeight, imgWidth, imgSize, imgUrl
            }
        }
    )
}