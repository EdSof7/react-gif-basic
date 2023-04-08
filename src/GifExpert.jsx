import { useState } from "react"
import { AddCategory , GifGrid } from './components'

const GifExpert = () => {
    const [categories, setCategories] = useState(['Naruto'])

    const onAddCategory = (eValue)=>{
      if(categories.includes(eValue)) return;
        setCategories([eValue])
    }

  return (
    <>
      <h1>GifExpert v1</h1>
      <AddCategory onNewCategory = {event => onAddCategory (event)}/>
      { categories.map((cate)=>(
        <GifGrid 
          key={cate}
          category={cate}/>
      ))}
    </>
  )
}

export default GifExpert
