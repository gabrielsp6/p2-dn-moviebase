import React from 'react'
import { useEffect, useState } from 'react';
import useSWR from "swr";
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
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import Layout from 'components/Layout';
import WatchList from 'components/WatchList';


const WatchListPage = () => {

  const [watchList, setWatchList] = useState([])
  const [totalRuntime, setTotalRuntime] = useState([])


  useEffect(() => {
    const getWatchList = async () => {
        const watchListFromServer = await fetchWatchlist()
        setWatchList(watchListFromServer)
    }
    getWatchList()
    }, [])


    const fetchWatchlist = async () => {
      try {
          const res = await fetch('http://localhost:3000/api/watchlist/all', {
          method: 'GET'
          })  
          const data = await res.json()
          return data
      } catch (e) {
          console.log(e)
      }
  }

  
  const deleteFromWatchList= async (movieId) => {
    await fetch(`http://localhost:3000/api/watchlist/all`, {
      method: 'DELETE',
      body: JSON.stringify({
        id: movieId
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // alert('deleted movie with id '+ movieId + ' from watchlist aaaa')
    
    //update list
      const getWatchList = async () => {
      const watchListFromServer = await fetchWatchlist()
      setWatchList(watchListFromServer)
    }
    getWatchList()
    location.reload();
  }

  return (
    <Layout title="Watchlist">
      <Container>
      <Heading as="h2">Watch List</Heading>

      <Wrap spacing={10}>
          <WatchList onDelete={deleteFromWatchList}/>
      </Wrap>

      </Container>
    </Layout>
  )
}

export default WatchListPage
