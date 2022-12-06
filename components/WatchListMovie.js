
const WatchListMovie = ({movie, onDelete}) => {
    return (
      <div key={movie.id}>
        {movie.title} 
          <div onClick={() => onDelete(movie.id)} 
           style={{ backgroundColor: 'red', cursor:'pointer', width:'6%', borderRadius:'5px' }}>
          Delete
          </div>
      </div>
    )
  }
  
  export default WatchListMovie
  