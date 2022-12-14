import useSWR from 'swr';
import React, {useEffect, useState} from 'react'
import { buildImageUrl } from 'utils/api';
import Image from 'next/image';

import {
    Box,
    Button,
    Center,
    CircularProgress,
    Container,
    Text,
    Heading,
    Link,
    transition
  } from '@chakra-ui/react';
import Head from 'next/head';

const Movie = ({id}) => {

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
    return <Text color="red">{data.status_message}</Text>;
    }

  return (
    <div key={id}>
      <Box minW="150px"
      pos="relative"
       width='150px' 

       _hover={{ cursor: 'pointer',
        transform: 'scale(1.3)', transition: '0.5s ease'}}
       >
        <Link href={`/movies/${id}`} passHref legacyBehavior>
          <Container >
          <Image 
            src={buildImageUrl(data.poster_path, 'w300')}
            alt="Movie poster"
            width="200"
            height="350"
            unoptimized 
            />
            </Container>
        </Link>
      </Box>
    </div>
  )
}

export default Movie
