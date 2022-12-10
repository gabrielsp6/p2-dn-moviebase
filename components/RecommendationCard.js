import { useRouter } from 'next/router';
import useSWR from 'swr';
import React, {useEffect, useState} from 'react'
import { buildImageUrl } from 'utils/api';
import HistoryButton from 'components/HistoryButton';
import Image from 'next/image';

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
    Wrap,
    WrapItem
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
    return <Text color="red">{data.status_message}</Text>;
    }

  return (
    <div key={id}>

      <Box minW="200px"
      pos="relative"
       width='200px' 
       _groupHover={{ color: 'tomato' }}
       >
        <Container>

        {data ? data.title : 'loading movie details --- please wait'}

        <Image
          src={buildImageUrl(data.poster_path, 'w300')}
          alt="Movie poster"
          layout="responsive"
          width="200"
          height="350"
          objectFit="contain"
          unoptimized
          />
          </Container>
      </Box>
    </div>
  )
}

export default RecommendationCard
