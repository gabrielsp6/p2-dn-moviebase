import WatchListMovie from "./WatchListMovie";

const WatchList = ({movies, onDelete}) => {
  return (
    <div>
      {movies.favourites ? movies.favourites?.map((movie, index)=> 
        <WatchListMovie key={index} onDelete={onDelete} movie={movie}/>
      ) : 'Loading WatchList'} 
    </div>
  )
}

export default WatchList
