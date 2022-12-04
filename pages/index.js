import { Center, Heading } from '@chakra-ui/react';
import Layout from 'components/Layout';

export default function Home() {
  return (
    <Layout title="Moviebase">
      <Center h="full">
        <Heading as="h2">Welcome, please search a movie</Heading>
      </Center>
    </Layout>
  );
}
