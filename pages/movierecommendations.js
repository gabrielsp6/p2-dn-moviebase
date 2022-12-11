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
import RecommendationsByHistory from 'components/RecommendationsByHistory';
import RecommendationsByFavourites from 'components/RecommendationsByFavourites';


const MovieRecommendations = () => {

  const [favourites, setFavourites] = useState([])
  const [historyList, sethistoryList] = useState([])

  const { data, error } = useSWR(`/api/favourites/fav`);

  useEffect(() => {
      const getFavourites = async () => {
          const favouritesFromServer = await fetchFavourites()
          setFavourites(favouritesFromServer)
      }
      getFavourites()
      }, [])
  
    // Fetch Favourites
    const fetchFavourites = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/favourites/fav', {
            method: 'GET'
            })  
            const data = await res.json()
            console.log(data)
            return data
        } catch (e) {
            console.log(e)
        }
    }
      
    useEffect(() => {
        const getHistoryList = async () => {
            const historyListFromServer = await fetchHistoryList()
            sethistoryList(historyListFromServer)
        }
        getHistoryList()
        }, [])
    
    // Fetch history list
    const fetchHistoryList = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/history/all', {
            method: 'GET'
            })  
            const data = await res.json()
            console.log(data)
            return data
        } catch (e) {
            console.log(e)
        }
    }

    if(!data){
      return (
        'loading'
      )
    }

  return (
    <Layout title="Movie Recommendations">
      <Container>
      <Heading as="h2" size={'lg'}>
        Recommendations based on favourites and watch history
      </Heading>
      <Heading as="h2" size={'md'}>
        (refresh for different results)

      </Heading>

      </Container>
      <RecommendationsByFavourites />
      <RecommendationsByHistory/>
    </Layout>
  )
}

export default MovieRecommendations
