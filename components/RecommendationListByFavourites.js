import {
    Badge,
    Card,
    CardBody,
    Center,
    CircularProgress,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    Wrap,
    WrapItem,
  } from "@chakra-ui/react";
import Movie from "pages/movies/[id]";
import React from "react";
import useSWR from "swr";
import { buildImageUrl } from "utils/api";
import Recommendations from "./Recommendations";
import RecommendationCard from "/components/RecommendationCard";
import FavouritesList from "./FavouritesList";

  const GetMovieTitleFromId = ({movieId}) => {

    const { data, error } = useSWR(movieId && `/api/movies/${movieId}`);

    if (error) {
        return <Text color="red">An error occured</Text>;
      }
    
      if (!data) {
        return (
          <Center h="full">
            <CircularProgress isIndeterminate />
          </Center>
        );
      }

    return (
        <>
        {data.title}
        </>

    )


  }

  
  const RecommendationListByFavourites= ({ id }) => {
    const { data, error } = useSWR(id && `/api/recommendation/${id}`);
  
    if (error) {
      return <Text color="red">An error occured</Text>;
    }
  
    if (!data) {
      return (
        <Center h="full">
          <CircularProgress isIndeterminate />
        </Center>
      );
    }

    //slice the array only 5 recommendations are enough
    const recommendations = data.recommendations.results.slice(0,5);
    return (

    <>
     <Heading as="h2">Because you favourited: 
     </Heading>
     <Text color={"#805AD5"} fontSize='xl' fontWeight={'700'}>
     <GetMovieTitleFromId movieId={id} />
     </Text>
        <Recommendations movies={recommendations} />
    </>
    );
  };
  
  export default RecommendationListByFavourites;
  