import { Button, Container } from "@chakra-ui/react"

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
      <Container width={'100%'}>

            <Button onClick={() => SetDate(id, date)}
            
            cursor='pointer'
            height={'28px'}
            margin={'10px'}
            alignSelf={'center'}
            justifySelf={'center'}
            >
                SET 
            </Button>
      </Container>
    )
  }
  
  export default SetDateButton
  