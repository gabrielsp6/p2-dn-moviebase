import Movie from "components/Movie";

const HistoryList = ({movies, onDelete}) => {
  return (
    <div>
      {movies.historylist ? movies.historylist?.map((movie, index)=> 
        <Movie key={index} onDelete={onDelete} id={movie.id}/>
      ) : 'Loading History List'} 
    </div>
  )
}

export default HistoryList
