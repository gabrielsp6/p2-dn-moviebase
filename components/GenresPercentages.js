import { useState, useEffect } from "react";
import calculateGenres from 'utils/calculateGenres';
import {
    Center,
    Container,
    Stack,
    WrapItem,
    Progress,
    Heading,
    List,
    ListItem,
    Text
  } from '@chakra-ui/react';

  import { BsFillSquareFill } from 'react-icons/bs';

  import { PieChart } from 'react-minimal-pie-chart';


const GenresPercentages = () => {

    const [genresList, setGenresList] = useState()

    useEffect( () => {
        getGenresList();
        }, [])
        

    const getGenresList = async () => {
      const response = await calculateGenres('671')
      const responseJson = await response
  
      if(responseJson) {
        setGenresList(responseJson)
  
        }
    }
    
    if(!genresList) {
        return (
            <Heading as="h2" size={'md'} color={"#805AD5"}>
                {'Add more movies, for a proper calculation of genres...'}
            </Heading>
        )
    }

    if(genresList.length < 3) {
        return (
            <Heading as="h2" size={'md'} color={"#805AD5"}>
                {'Add more movies, for a proper calculation of genres...'}
            </Heading>
        )
    }
  
  return (
    <Container>
        <Container>
        <PieChart viewBoxSize={'[100,100]'} radius='50'
  data={[
    { title: 'One', value: parseInt((genresList[Object.keys(genresList)[0]])), color: '#9E86D5' },
    { title: 'Two', value: parseInt((genresList[Object.keys(genresList)[1]])), color:"#805AD5"},
    { title: 'Three', value: parseInt((genresList[Object.keys(genresList)[2]])), color: 'white' },
    { title: 'Three', value: parseInt((genresList[Object.keys(genresList)[3]])), color: '#B171C3' }
  ]}
/>
        </Container>


        <Heading as="h2" size={'md'} color='#9E86D5' >
            {'This list contains '}
        </Heading>

        <List type="unordered" spacing={0} fontSize="lg" color="teal.500">
            
            <ListItem size={'md'} color='#9E86D5' fontWeight={'700'} margin='0' display={'flex'} alignItems='center'>
            <BsFillSquareFill style={{ marginRight: '10px' }}/>
            {genresList && JSON.stringify(genresList[Object.keys(genresList)[0]]).slice(1,3) }
            {' % '}
            {genresList && JSON.stringify(Object.keys(genresList)[0]).replace(/['"]+/g, '') }
            {' '}
            </ListItem>

            <ListItem size={'md'} color='#805AD5' fontWeight={'700' } display={'flex'} alignItems='center'>
            <BsFillSquareFill style={{ marginRight: '10px' }}/>
            {genresList && JSON.stringify(genresList[Object.keys(genresList)[1]]).slice(1,3) }
            {' % '}
            {genresList && JSON.stringify(Object.keys(genresList)[1]).replace(/['"]+/g, '') }
            {' '}
            </ListItem>

            <ListItem size={'md'} color='white' fontWeight={'700'} display={'flex'} alignItems='center'>
            <BsFillSquareFill style={{ marginRight: '10px' }}/>
            {genresList && JSON.stringify(genresList[Object.keys(genresList)[2]]).slice(1,3) }
            {' % '}
            {genresList && JSON.stringify(Object.keys(genresList)[2]).replace(/['"]+/g, '') }
            {' '}
            </ListItem>

            <ListItem size={'md'} color='#B171C3' fontWeight={'700'} display={'flex'} alignItems='center'>
            <BsFillSquareFill style={{ marginRight: '10px' }}/>
            {genresList && JSON.stringify(genresList[Object.keys(genresList)[3]]).slice(1,3) }
            {' % '}
            {genresList && JSON.stringify(Object.keys(genresList)[3]).replace(/['"]+/g, '') }
            {' '}
            
            </ListItem>

        </List>

        <Heading as="h2" size={'md'} color='#805AD5'>
        <Text> 
            
            </Text>
        </Heading>
        <Heading as="h2" size={'md'} color='white'>

        </Heading>
        <Heading as="h2" size={'md'} color='#B171C3'>

        </Heading>
    </Container>
  )
}

export default GenresPercentages
