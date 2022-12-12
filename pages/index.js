import { Center, Container, Heading } from '@chakra-ui/react';
import Layout from 'components/Layout';
import Trending from 'components/Trending';

export default function Home() {
  return (
    <Layout title="Moviebase">
      <Center h="full" direction='row'>
      <Container>
          <Trending />
        </Container>
      </Center>
      
    </Layout>
  );
}
