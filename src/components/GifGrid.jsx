import GifItem from "./GifItem";
import useFethGifs from "../hooks/useFethGifs";

export const GifGrid = ({category}) => {
  const {images,isLoading} = useFethGifs(category)
    
  return (
    <>
      <h4>{category}</h4>
      {
        isLoading && <h4>Loading...</h4>
      }
      <div className="card-grid">
        {
            images.map((image)=>
            (<GifItem 
                key={image.id} 
                {...image}/>
            ))
        }
      </div>
    </>
  )
}
