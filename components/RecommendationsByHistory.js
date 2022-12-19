
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
    if(data.historylist.length == 0) {
      return (
        <Container>

        <Heading as={'h5'} fontSize='24px' color={"#805AD5"}>
        Add movies to history, to get proper recommendations 
        </Heading>
        </Container>
      )
    }

  return (
    <Container>
    <Heading as="h2" size={'lg'}>
    </Heading>
      <RecommendationListByHistory 
      id={data.historylist[Math.floor(Math.random()*data.historylist.length)].id} />

    
    </Container>
  )
}

export default RecommendationsByHistory
