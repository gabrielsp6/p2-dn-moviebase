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
  Box
} from '@chakra-ui/react';
import Layout from 'components/Layout';
import FavouritesList from 'components/FavouritesList';



const FavouritesPage = () => {

const [favourites, setFavourites] = useState([])
const [totalRuntime, setTotalRuntime] = useState([])

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

  const deleteFromFavourites = async (movieId) => {
    await fetch(`http://localhost:3000/api/favourites/fav`, {
      method: 'DELETE',
      body: JSON.stringify({
        id: movieId
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    alert('deleted movie with id '+ movieId + ' from favourite list')
    
    //update list
      const getFavourites = async () => {
      const favouritesFromServer = await fetchFavourites()
      setFavourites(favouritesFromServer)
    }
  getFavourites()
  }

  return (
    <Layout title="Favourites">
      <Heading as="h2">this is the favourites page</Heading>
      <Container>
          <FavouritesList movies={favourites} onDelete={deleteFromFavourites}/>
      </Container>
    </Layout>
  )
}

export default FavouritesPage
