import useSWR from "swr";
import Movie from "components/Movie";
import {
  Center,
  Container,
  Stack,
  WrapItem,
  Progress,
  Text,
  Box,
  Heading
} from '@chakra-ui/react';
import { useState, useEffect } from "react";
import calculateRuntime from 'utils/calculateRuntime';
import Runtimes from "./Runtimes";


const FavouritesList = ({onDelete}) => {



  const { data, error } = useSWR(`/api/favourites/all`);

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
      <Runtimes />
      <Stack margin='30px'  flexWrap="wrap" marginBottom='100px' direction={'row'}>
        {data.favourites ? data.favourites?.map((movie, index)=> 
          <Movie key={index} onDelete={onDelete} id={movie.id}/>
        ) : 'Loading favourites'} 
      </Stack>
    </Container>
  )
}

export default FavouritesList
