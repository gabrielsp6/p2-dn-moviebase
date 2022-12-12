import useSWR from "swr";
import Movie from "components/Movie";
import {
  Stack,
  Progress,
  Container,
  Heading
} from '@chakra-ui/react';
import MovieSmall from "components/MovieSmall";


const Trending = () => {
    const { data, error } = useSWR(`/api/trending/get`);

    if (error) {
        return (
          <Text color="red">
            Error fetching trending: {JSON.stringify(error)}
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
    <Heading as={'h3'}>Trending movies as of today</Heading>
    <Stack m={'33px'}  flexWrap="wrap" mb="4" direction={'row'}>
    {data.results.slice(0,6) ? data.results.slice(0,6)?.map((movie, index)=> 
      <MovieSmall id={movie.id}/>
    ) : 'Loading trending List'} 
  </Stack>
    </Container>

  )
}

export default Trending
