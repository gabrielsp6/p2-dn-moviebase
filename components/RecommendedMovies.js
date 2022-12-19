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

  
  const RecommendedMovies = ({ id, title }) => {
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
    const recommendations = data.recommendations.results;
    return (
     
    <>
      <Recommendations movies={recommendations} />
    </>
    );
  };
  
  export default RecommendedMovies;
  