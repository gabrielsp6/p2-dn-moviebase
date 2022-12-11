
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
  Box
} from '@chakra-ui/react';


const RecommendationsByFavourites= () => {

    const { data, error } = useSWR(`/api/favourites/fav`);


    if(!data){
        return (
          'loading'
        )
      }
  return (
    'aaa'
  )
}

export default RecommendationsByFavourites
