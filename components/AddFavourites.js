import React from 'react'



const AddFavourites = ({ movie, onAdd}) => {
      
    return (
                <div onClick={onAdd}>
                    Add {movie.title} to Favourites 
                </div>
    )
}

export default AddFavourites;