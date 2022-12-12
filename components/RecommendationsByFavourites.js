
import React from 'react'
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import {
  Input,
  IconButton,
  Container,
  UnorderedList,
  ListItem,
  Progress,
  Text,
  InputGroup,
  InputRightElement,
  VStack,
  Button,
  Badge,
  Heading,
  Box,
  Center,
  CircularProgress
} from '@chakra-ui/react';

import RecommendationListByFavourites from './RecommendationListByFavourites';



const RecommendationsByFavourites= ({id}) => {

  const { data, error } = useSWR(`/api/favourites/all`);


  if(!data){

      return (
        'loading'
      )
    }

return (
  <Container>
  <Heading as="h2" size={'lg'}>
  </Heading>
   <RecommendationListByFavourites id={data.favourites[Math.floor(Math.random()*data.favourites.length)].id} />
  </Container>
)


}

export default RecommendationsByFavourites
