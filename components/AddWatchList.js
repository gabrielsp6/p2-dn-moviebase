
const AddWatchList = ({ movie, onAdd}) => {
      
    return (
                <div onClick={onAdd}>
                    Add {movie.title} to Watch List 
                </div>
    )
}

export default AddWatchList;