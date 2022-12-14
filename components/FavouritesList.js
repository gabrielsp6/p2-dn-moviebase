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


const FavouritesList = ({onDelete}) => {
  const [runtimes, setRuntimes] = useState([])

  const getRuntimes = async () => {
    const response = await calculateRuntime()
    const responseJson = await response


    if(responseJson) {
      const newRunTimes = responseJson.reduce(function(acc, value){
        return acc+value
      }, 0)
      setRuntimes(newRunTimes)
    }
  }

  useEffect( () => {
    getRuntimes();
    }, [])


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
  

  console.log(calculateRuntime(671))

  return (
    <Container>
      <Heading as="h2" size={'md'}>
        {'This list would take you to watch '}
         {JSON.stringify(runtimes/60)} hours {runtimes%60 == 0 ? ' '  : runtimes%60 + ' minutes'}
      </Heading>

      <Stack margin='30px'  flexWrap="wrap" marginBottom='100px' direction={'row'}>
        {data.favourites ? data.favourites?.map((movie, index)=> 
          <Movie key={index} onDelete={onDelete} id={movie.id}/>
        ) : 'Loading favourites'} 
      </Stack>
    </Container>
  )
}

export default FavouritesList
