import Movie from "components/Movie";
import {
  Center,
  Container,
  Stack,
  WrapItem
} from '@chakra-ui/react';

const HistoryList = ({movies, onDelete}) => {
  return (
    <Stack m={'33px'}  flexWrap="wrap" mb="4" direction={'row'}>
      {movies.historylist ? movies.historylist?.map((movie, index)=> 
        <Movie key={index} onDelete={onDelete} id={movie.id}/>
      ) : 'Loading History List'} 
    </Stack>
  )
}

export default HistoryList
