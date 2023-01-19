import axios from 'axios'
const getGifs=async(category)=>{
    const urlGlobal=`https://api.giphy.com/v1/gifs/search?api_key=1tX5gEtMOHOX8yUOdZdVD8Sh5CQHWNWy&q=${category}&limit=10`
    // const resp=await fetch(urlGlobal) 
    const {data:{data}}=await axios(urlGlobal)
    const gifs=data.map(img=>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }))
    return gifs
   
}

export default getGifs