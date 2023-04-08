import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ({target})=>{
        setInputValue(target.value)
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length <= 2) return;
        onNewCategory(inputValue.trim())
        /* onAdd(categories => [...categories,inputValue]) */
        setInputValue('')
    }
  return (
    <form onSubmit={(e)=>onSubmit(e)}>
        <input 
            type="text"
            placeholder="Search gifs"
            value={inputValue}
            onChange={(e)=>handleInputChange(e)}
        />
    </form>
  )
}

