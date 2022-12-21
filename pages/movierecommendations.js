import React from 'react'
import {
  Container,
  Heading,
  Text
} from '@chakra-ui/react';
import Layout from 'components/Layout';
import RecommendationsByHistory from 'components/RecommendationsByHistory';
import RecommendationsByFavourites from 'components/RecommendationsByFavourites';


const MovieRecommendations = () => {

  return (
    <Layout title="Movie Recommendations">
      <Container>
      <Text size={'md'}>
        Recommendations based on a random movie from your favourites and one from your watch history
        (refresh for different results)
      </Text>


      </Container>
      <RecommendationsByFavourites />
      <RecommendationsByHistory/>
    </Layout>
  )
}

export default MovieRecommendations
