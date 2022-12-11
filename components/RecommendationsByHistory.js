
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
import Layout from 'components/Layout';
import RecommendationListByHistory from './RecommendationListByHistory';


const RecommendationsByHistory = () => {

    const { data, error } = useSWR(`/api/history/all`);


    if(!data){

        return (
          'loading'
        )
      }

  return (
    <Container>
    <Heading as="h2" size={'lg'}>
    </Heading>
     <RecommendationListByHistory id={data.historylist[Math.floor(Math.random()*data.historylist.length)].id} />
    </Container>
  )
}

export default RecommendationsByHistory
