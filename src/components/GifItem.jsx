
const GifItem = ({id,title,imgURL}) => {
  return (
    <div key={id}>
      <img src={imgURL} alt={title}/>
      <p>{title}</p>
    </div>
  )
}

export default GifItem
