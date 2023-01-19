import { useState,useEffect } from "react"
import getGifs from "../helpers/getGifs"
export const useFetchGifs=category=>{
    const [gifts,setGitfs]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        const getGifsResponse=async()=>{
            const Gitfs=await getGifs(category)
            setGitfs(Gitfs)
            setIsLoading(false)
        }
        getGifsResponse()
    },[category])
    return{
        images:gifts,
        isLoading
    }
}