import { Center, Container, Heading } from '@chakra-ui/react';
import Layout from 'components/Layout';
import MovieCollection from 'components/MovieCollection';
import { collectionArray } from 'utils/collectionArray';

export default function Home() {
  return (
    <Layout title="Collections">

      <Container display={'flex'} flexDirection={'row'} alignItems="center">
        <MovieCollection list={collectionArray.harryPotterCollection.movies} 
        title={collectionArray.harryPotterCollection.title} 
        posterUrl={collectionArray.harryPotterCollection.posterUrl}
         totalRuntime={collectionArray.harryPotterCollection.totalRuntime}/>

        <MovieCollection list={collectionArray.shrekCollection.movies} 
        title={collectionArray.shrekCollection.title} 
        posterUrl={collectionArray.shrekCollection.posterUrl} 
        totalRuntime={collectionArray.shrekCollection.totalRuntime}/>

        <MovieCollection list={collectionArray.lotrCollection.movies} 
        title={collectionArray.lotrCollection.title} 
        posterUrl={collectionArray.lotrCollection.posterUrl} 
        totalRuntime={collectionArray.lotrCollection.totalRuntime}/>
        </Container>

        <Container display={'flex'} flexDirection={'row'} alignItems="center" mt={'50px'}>
        <MovieCollection list={collectionArray.marvelCollectionOne.movies} 
        title={collectionArray.marvelCollectionOne.title} 
        posterUrl={collectionArray.marvelCollectionOne.posterUrl}
         totalRuntime={collectionArray.marvelCollectionOne.totalRuntime}/>

        <MovieCollection list={collectionArray.marvelCollectionTwo.movies} 
        title={collectionArray.marvelCollectionTwo.title} 
        posterUrl={collectionArray.marvelCollectionTwo.posterUrl} 
        totalRuntime={collectionArray.marvelCollectionTwo.totalRuntime}/>

        <MovieCollection list={collectionArray.marvelCollectionThree.movies} 
        title={collectionArray.marvelCollectionThree.title} 
        posterUrl={collectionArray.marvelCollectionThree.posterUrl} 
        totalRuntime={collectionArray.marvelCollectionThree.totalRuntime}/>
        </Container>


      
    </Layout>
  );
}
