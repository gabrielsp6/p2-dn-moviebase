import useSWR from "swr";
import Movie from "components/Movie";
import {
  Center,
  Container,
  Stack,
  WrapItem,
  Progress,
  Heading
} from '@chakra-ui/react';
import { useState, useEffect } from "react";
import calculateGenres from 'utils/calculateGenres';
import GenresPercentages from "./GenresPercentages";


const WatchList = ({onDelete}) => {

  const [genresList, setGenresList] = useState()
useEffect( () => {
  getGenresList();
  }, [])

  const getGenresList = async () => {
    const response = await calculateGenres('671')
    const responseJson = await response

    if(responseJson) {
      setGenresList(responseJson)

      }
  }
  


  const { data, error } = useSWR(`/api/watchlist/all`);


  if (error) {
    return (
      <Text color="red">
        Error fetching list: {JSON.stringify(error)}
      </Text>
    );
  }
  if (!data) {
    return <Progress size="xs" isIndeterminate />;
  }

  if (data.success === false) {
    return <Text color="red">{data.status_message}</Text>;
  }
  return (

    <Container>
      <GenresPercentages />

      <Stack m={'33px'}  flexWrap="wrap" mb="4" direction={'row'}>
        {data.favourites ? data.favourites?.map((movie, index)=> 
          <Movie key={index} onDelete={onDelete} id={movie.id}/>
          ) : 'Loading watchlist....'} 
      </Stack>
    </Container>
  )
}

export default WatchList
