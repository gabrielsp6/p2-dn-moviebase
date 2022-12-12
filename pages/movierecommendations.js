import React from 'react'
import {
  Container,
  Heading,
} from '@chakra-ui/react';
import Layout from 'components/Layout';
import RecommendationsByHistory from 'components/RecommendationsByHistory';
import RecommendationsByFavourites from 'components/RecommendationsByFavourites';


const MovieRecommendations = () => {

  return (
    <Layout title="Movie Recommendations">
      <Container>
      <Heading as="h2" size={'md'}>
        Recommendations based on a random movie from your favourites and one from your watch history
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
