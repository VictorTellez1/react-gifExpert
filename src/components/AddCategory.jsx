import { useState } from "react"
const AddCategory = ({onAddCategory,categories}) => {
    const [inputValue,setInputValue]=useState('')
    const handleChange=(e)=>{
        setInputValue(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(inputValue.trim().length <= 1){
            return
        }
        if(categories.includes(inputValue.trim())) {
            setInputValue('')
            return;
        }
        onAddCategory(inputValue.trim())
        setInputValue('')
        
    }
    return (
       <form
        onSubmit={handleSubmit}
       >
        <div>
            <input
                type="text"
                placeholder="Buscar gifts"
                value={inputValue}
                onChange={handleChange}
            />
        </div>
       </form>
    )
}

export default AddCategory
