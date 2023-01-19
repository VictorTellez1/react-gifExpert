
import React, { useEffect,useState } from 'react'
import getGifs from '../helpers/getGifs'
import Gift from '../components/Gift'
import { useFetchGifs } from '../hooks/useFetchGifs'
const GifGrid = ({category}) => {
   
    const  {images,isLoading}=useFetchGifs(category)

    console.log(images)
    return (
        <div>
          <h1 className='text-center'>{category}</h1> 
          {isLoading ? 'Cargando.... ' : (
            <div className='grid contenedor'>
                {images.map(gifts=>(
                    <div><Gift key={gifts.id} gifts={gifts}/></div>
                ))}
            </div>
          )}
        </div>
    )
}

export default GifGrid
