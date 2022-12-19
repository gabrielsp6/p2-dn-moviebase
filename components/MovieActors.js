
import useSWR from 'swr';
import { buildImageUrl } from 'utils/api';
import Image from 'next/image';

import {
    Box,
    Center,
    CircularProgress,
    Container,
    Text,
    Link,
    Heading
  } from '@chakra-ui/react';
import ActorsList from './ActorsList';

const MovieActors = ({id}) => {
  const { data, error } = useSWR(id && `/api/credits/${id}`);
    if (error) {
      return (
          <Text color="red">
          Error fetching actors for movie with ID {id}: {JSON.stringify(error)}
          </Text>
      );
      }


    if (!data) {
        return (
            <Center h="full">
            <CircularProgress isIndeterminate />
            </Center>
        );
        }
    if (data.success === false) {
    return <Text color="red">{data.status_message}</Text>;
    }

  return (
    <Container>
      <Heading as={'h5'} fontSize='24px' mb={'40px'}>
      Top cast for this movie:
      </Heading>
      <ActorsList cast={data.cast}/>
    </Container>
  )
}

export default MovieActors
