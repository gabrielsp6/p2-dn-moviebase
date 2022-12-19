import useSWR from "swr";
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
      <MovieSmall id={movie.id} key={movie.id}/>
    ) : 'Loading trending List'} 
  </Stack>
    </Container>
  )
}

const Favourites = () => {
  const { data, error } = useSWR(`/api/favourites/all`);

  if (error) {
      return (
        <Text color="red">
          Error fetching favourites: {JSON.stringify(error)}
        </Text>
      );
    }
    if (!data) {
      return <Progress size="xs" isIndeterminate />;
    }
  
    if (data.success === false) {
      return <Text color="red">{data.status_message}</Text>;
    }

    if(data && data.favourites.length === 0) {
      return (
        <Container>
        <Heading as={'h3'}>Favourite movies</Heading>
        <Heading as="h2" size={'md'} color={"#805AD5"}>
                {'Favourites list is empty, add more movies'}
        </Heading>

      </Container>
      )
    }
return (
  <Container>
    <Heading as={'h3'}>Favourite movies</Heading>
    <Stack m={'33px'}  flexWrap="wrap" mb="4" direction={'row'}>
    {data.favourites.slice(0,6) ? data.favourites.slice(0,6)?.map((movie, index)=> 
      <MovieSmall id={movie.id} key={movie.id}/>
    ) : 'Loading trending List'} 
    </Stack>
  </Container>
)
}

const WatchList = () => {
  const { data, error } = useSWR(`/api/watchlist/all`);

  if (error) {
      return (
        <Text color="red">
          Error fetching watchlist: {JSON.stringify(error)}
        </Text>
      );
    }
    if (!data) {
      return <Progress size="xs" isIndeterminate />;
    }
  
    if (data.success === false) {
      return <Text color="red">{data.status_message}</Text>;
    }

    if(data && data.favourites.length === 0) {
      return (
        <Container>
        <Heading as={'h3'}>Favourite movies</Heading>
        <Heading as="h2" size={'md'} color={"#805AD5"}>
                {'Watchlist is empty, add more movies'}
        </Heading>

      </Container>
      )
    }
return (
  <Container>
  <Heading as={'h3'}>Watchlist movies:</Heading>
  <Stack m={'33px'}  flexWrap="wrap" mb="4" direction={'row'}>
  {data.favourites.slice(0,6) ? data.favourites.slice(0,6)?.map((movie, index)=> 
    <MovieSmall id={movie.id} key={movie.id}/>
  ) : 'Loading trending List'} 
</Stack>
  </Container>
)
}


const HomePageMovies = () => {
  return (
    <Container>
      <Favourites />
      <WatchList />
      <Trending />

    </Container>
  )
}

export default HomePageMovies
