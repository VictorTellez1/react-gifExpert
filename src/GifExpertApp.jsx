import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"
const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])
    // const onAddCategory=()=>{
    //     setCategories([...categories,valor])
    // }
    const onAddCategory=newCategorie=>{
        setCategories([newCategorie,...categories])
        
    }
  return (
    <main className="contenedor">
        <h1 className="text-center">GifExpertApp</h1>
        <AddCategory onAddCategory={onAddCategory} categories={categories}/>
        {categories.map(category=>(
            <GifGrid key={category} category={category}/>
        ))}
    </main>
  )
}

export default GifExpertApp