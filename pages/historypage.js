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
  Box,
  Wrap
} from '@chakra-ui/react';
import Layout from 'components/Layout';
import HistoryList from 'components/HistoryList';



const HistoryPage = () => {

const [historyList, sethistoryList] = useState([])
const [totalRuntime, setTotalRuntime] = useState([])

useEffect(() => {
    const getHistoryList = async () => {
        const historyListFromServer = await fetchHistoryList()
        sethistoryList(historyListFromServer)
    }
    getHistoryList()
    }, [])

    // Fetch Favourites
    const fetchHistoryList = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/history/all', {
            method: 'GET'
            })  
            const data = await res.json()
            console.log(data)
            return data
        } catch (e) {
            console.log(e)
        }
    }

  const deleteFromHistoryList = async (movieId) => {
    await fetch(`http://localhost:3000/api/history/all`, {
      method: 'DELETE',
      body: JSON.stringify({
        id: movieId
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // alert('deleted movie with id '+ movieId + ' from history list')
    
    //update list
      const getHistoryList = async () => {
      const historyListFromServer = await fetchHistoryList()
      sethistoryList(historyListFromServer)
    }
    getHistoryList()
    location.reload();
  }

  return (
    <Layout title="History Page">
      <Container>
      <Heading as="h2">Your watch History</Heading>
      </Container>
      <Container>
      <Wrap spacing={10}>
          <HistoryList movies={historyList} onDelete={deleteFromHistoryList}/>
          </Wrap>
      </Container>
    </Layout>
  )
}

export default HistoryPage
