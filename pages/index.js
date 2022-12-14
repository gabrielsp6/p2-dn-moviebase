import { Center, Container, Heading } from '@chakra-ui/react';
import Layout from 'components/Layout';
import HomePageMovies from 'components/HomePageMovies';

export default function Home() {
  return (
    <Layout title="Moviebase">

      <Container>
          <HomePageMovies />
        </Container>

      
    </Layout>
  );
}
