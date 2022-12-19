import useSWR from 'swr';
import { buildImageUrl } from 'utils/api';
import Image from 'next/image';

import {
    Box,
    Center,
    CircularProgress,
    Container,
    Text,
    Link
  } from '@chakra-ui/react';

const RecommendationCard = ({id}) => {

const { data, error } = useSWR(id && `/api/movies/${id}`);

    if (error) {
        return (
            <Text color="red">
            Error fetching movie with ID {id}: {JSON.stringify(error)}
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
    return <Text color="red">{data.status_message} </Text>;
    }

  return (
    <div key={id}>

      <Box minW="200px"
      pos="relative"
       width='200px' 

       >
        <Container>

        {data ? data.title : 'loading movie details --- please wait'}
        <Link href={`/movies/${id}`} passhref="true" legacybehavior="true">

        <Image
          src={buildImageUrl(data.poster_path, 'w300')}
          alt="Movie poster"
          width="200"
          height="350"
          unoptimized
          />
        </Link>
          </Container>
      </Box>
    </div>
  )
}

export default RecommendationCard
