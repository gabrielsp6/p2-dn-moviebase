import React from 'react'
import { useEffect, useState } from 'react';

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


useEffect(() => {
    const getWatchList = async () => {
        const watchListFromServer = await fetchWatchList()
        setWatchList(watchListFromServer)
    }
    getWatchList()
    }, [])

    // Fetch WatchList
    const fetchWatchList = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/watchlist/movie', {
            method: 'GET'
            })  
            const data = await res.json()
            console.log(data)
            return data
        } catch (e) {
            console.log(e)
        }
    }

  const deleteFromWatchList= async (movieId) => {
    await fetch(`http://localhost:3000/api/watchlist/movie`, {
      method: 'DELETE',
      body: JSON.stringify({
        id: movieId
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    alert('deleted movie with id '+ movieId + ' from watchlist')
    
    //update list
      const getWatchList = async () => {
      const watchListFromServer = await fetchWatchList()
      setWatchList(watchListFromServer)
    }
    getWatchList()
  }

  return (
    <Layout title="Watchlist">
      <Container>
      <Heading as="h2">this is the WatchList page</Heading>

      <Wrap spacing={10}>
          <WatchList movies={watchList} onDelete={deleteFromWatchList}/>
      </Wrap>

      </Container>
    </Layout>
  )
}

export default WatchListPage
