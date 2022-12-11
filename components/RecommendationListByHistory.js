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
        <Heading as="h2" size={'lg'}>
        {data.title}
        </Heading>
    )


  }

  
  const RecommendationListByHistory = ({ id, title }) => {
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

    console.log(data);
    const recommendations = data.recommendations.results;
    return (
     
    <>
     <Heading as="h2">Because you watched: 
     </Heading>
     <Heading as="h2" size={'lg'}>
     <GetMovieTitleFromId movieId={id} />
     </Heading>
        <Recommendations movies={recommendations} />
    </>
    );
  };
  
  export default RecommendationListByHistory;
  