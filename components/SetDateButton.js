
const SetDateButton = ({id, date}) => {

    const SetDate = async (movieId, movieDate) => {
        await fetch(`http://localhost:3000/api/history/date`, {
          method: 'PUT',
          body: JSON.stringify({
            id: movieId,
            date: movieDate
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        alert('changed date of movie '+ movieId + ' from')
        
      }
    

    return (
                  <div onClick={() => SetDate(id, date)} style={{ backgroundColor: 'red', cursor:'pointer', width:'35%', borderRadius:'5px' }}>
                      SET 
                  </div>
    )
  }
  
  export default SetDateButton
  