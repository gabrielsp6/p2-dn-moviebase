import React from 'react'

const QuickAdd = ({ movie, onAdd}) => {
    return (
        <div onClick={onAdd}>
            Add {movie.title} to Favourites 
        </div>
    )
}

export default QuickAdd
