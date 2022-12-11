import {
  Center,
  Container,
  Stack,
  WrapItem
} from '@chakra-ui/react';

import Movie from "components/Movie";

const FavouritesList = ({movies, onDelete}) => {
  return (
    <Stack m={'33px'}  flexWrap="wrap" mb="4" direction={'row'}>
      {movies.favourites ? movies.favourites?.map((movie, index)=> 
        <Movie key={index} onDelete={onDelete} id={movie.id}/>
      ) : 'Loading favourites'} 
    </Stack>
  )
}

export default FavouritesList
