
import useSWR from 'swr';
import React, { useState} from 'react'
import { buildImageUrl } from 'utils/api';
import Image from 'next/image';
import {
    Box,
    Button,
    Center,
    CircularProgress,
    Container,
    Text,
    Link
  } from '@chakra-ui/react';


import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import SetDateButton from './SetDateButton';
const Movie = ({id, onDelete, isHistory, date}) => {

const { data, error } = useSWR(id && `/api/movies/${id}`);
const [selectedDate, setSelectedDate] = useState(null)

    if (error) {
        return (
            <Text color="red">
            Error fetching movie with ID {id}: {JSON.stringify(error)}
            </Text>
        );
        }

    if (!data) {
        return (
            <Center h="full">
            <CircularProgress isIndeterminate />
            </Center>
        );
        }
    if (data.success === false) {
    return <Text color="red">{data.status_message}</Text>;
    }

  return (
   
    
      <Box key={id} minW="200px"
      pos="relative"
       width='200px' 
       _hover={{ cursor: 'pointer',
       
       transform: 'scale(1.1)', transition: '0.5s ease'}}

       mb='20px'
       padding='0'
       >



{isHistory?  (<Container> 

<DatePicker 
 
  selected={selectedDate}
  onChange={date => setSelectedDate(date)}
  dateFormat='yyyy-MM-dd'
  filterDate={date => date.getDay() !== 6 && date.getDay() !==0}
  isClearable
  showYearDropdown
  scrollableMonthYearDropdown
/>

{JSON.stringify(selectedDate)}

<SetDateButton id={data.id} date={selectedDate}/>


</Container>) : ' '}



        <Container>

          <Container 
            position='absolute'
            width='85%'
            height='100%'
            opacity={0}
            padding='0'
            _hover={{ cursor: 'pointer',
            opacity: 0.8, transition: '0.5s ease'}}
            
            >
              <Container
              position='absolute'
              width='100%'
              backgroundColor='black'
      
              top='100px'
              >
            {data ? data.title : 'loading movie details --- please wait'}

              </Container>

          </Container>
        <Button onClick={() => onDelete(id)}
         cursor='pointer'
          position={'absolute'}
        
          left='30%'
          top='180px'
          backgroundColor={'rgba(0,0,0, 0.65)'}
          >
        Delete
        </Button>
        <Link href={`/movies/${id}`} passhref="true" legacybehavior="true">

          <Image
            src={buildImageUrl(data.poster_path, 'w200')}
            alt="Movie poster"
        
            width="200"
            height="350"

            unoptimized
            priority="true"
            />
        </Link>
          </Container>
      </Box>
  )
}
export default Movie
