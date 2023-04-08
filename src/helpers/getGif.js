export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Z999d7JdfC7bO9MfWoQ4yNPPSolG987Q&q=${category}&limit=10`
    const response = await fetch(url)

    const {data} = await response.json()

    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        imgURL: img.images.downsized_medium.url,

    }))
    console.log(gifs)
    return gifs
}