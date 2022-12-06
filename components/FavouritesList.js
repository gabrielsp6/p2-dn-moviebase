import Favourite from "./Favourite";

const FavouritesList = ({movies, onDelete}) => {
  return (
    <div>
      {movies.favourites ? movies.favourites?.map((movie, index)=> 
        <Favourite key={index} onDelete={onDelete} movie={movie}/>
      ) : 'Loading Favourites'} 
    </div>
  )
}

export default FavouritesList
