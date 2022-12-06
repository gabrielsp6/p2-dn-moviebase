import Movie from "components/Movie";

const FavouritesList = ({movies, onDelete}) => {
  return (
    <div>
      {movies.favourites ? movies.favourites?.map((movie, index)=> 
        <Movie key={index} onDelete={onDelete} id={movie.id}/>
      ) : 'Loading Favourites'} 
    </div>
  )
}

export default FavouritesList
