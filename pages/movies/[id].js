import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import useSWR from 'swr';
import { buildImageUrl } from 'utils/api';
import {
  Badge,
  Box,
  Button,
  Center,
  CircularProgress,
  Container,
  Heading,
  HStack,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';
import Layout from 'components/Layout';
import HistoryButton from 'components/HistoryButton';
import React, {useEffect, useState} from 'react'
import AddFavourites from 'components/AddFavourites';

const MovieContent = () => {
  const { id } = useRouter().query;
  const { data, error } = useSWR(id && `/api/movies/${id}`);



  const addMovie = async () => {
    const mappedGenres = data.genres.map( x => x.name)
    const res = await fetch(`http://localhost:3000/api/favourites/fav`, {
        method: 'POST',
        body: JSON.stringify({
          id: data.id,
          poster_path: data.poster_path,
          title: data.title,
          vote_average: data.vote_average,
          genres: mappedGenres,
          runtime: data.runtime.toString()
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('movie added to favourites list!')
  }
    


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
    return <Text color="red">{data.status_message}</Text>;
  }
  
  return (
    <Stack direction={['column', 'row']} spacing={4}>
      <Head>
        <title>{data.title}</title>
      </Head>

      
      <Box minW="300px" pos="relative">
        <HStack pos="absolute" zIndex={1} top={2} right={2}>
          <HistoryButton />
        </HStack>
        <Image
          src={buildImageUrl(data.poster_path, 'w300')}
          alt="Movie poster"
          layout="responsive"
          width="300"
          height="450"
          objectFit="contain"
          unoptimized
        />
      </Box>

      
      <Stack>
        <HStack justify="space-between">
          <Heading as="h2">{data.title}</Heading>
          <Box>
            <Tag colorScheme="purple" variant="solid">
              {data.release_date}
            </Tag>
          </Box>
        </HStack>
        <Box>{data.tagline}</Box>

        <Stack direction="row">
          {data.genres?.map((genre) => (
            <Badge key={genre.id} colorScheme="purple" variant="outline">
              {genre.name}
            </Badge>
          ))}
        </Stack>
            
        <Box>
        
        <Badge  colorScheme="purple" variant="outline">
        </Badge>
        
        </Box>
        <Button>

        <AddFavourites onAdd={addMovie} movie = {data} />
        </Button>
     
        <Box>{data.overview}</Box>
        <Box>
          <Heading as={'h5'} fontSize='20px'>
          {Math.floor(data.runtime/60)} hr {data.runtime%60} minutes 
          </Heading>
        </Box>
      </Stack>
    </Stack>
  );
};

export default function Movie() {
  return (
    <Layout>
      <Container h="full">
        <MovieContent />
      </Container>
    </Layout>
  );
}
