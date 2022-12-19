
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
const HistoryPageMovie = ({id, onDelete, isHistory, date}) => {

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
   

    <Box key={id} 
    pos="relative"
      width='250px' 
      margin='15px'
      marginBottom={'10px'}
      padding='0'
      border={'2px'}
      borderRadius={'10px'}
      padding={'15px'}
      >

        <DatePicker 
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat='yyyy-MM-dd'
          filterDate={date => date.getDay() !== 6 && date.getDay() !==0}
          isClearable
          showYearDropdown
          scrollableMonthYearDropdown
          placeholderText='change watch date...'


        />

        <SetDateButton id={data.id} date={selectedDate}/>

        <Container>
          <Container 
            position='absolute'
            width='79%'
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
            >
          Delete
          </Button>
          <Link href={`/movies/${id}`} passHref legacyBehavior>

       
          <Image
            src={buildImageUrl(data.poster_path, 'w200')}
            alt="Movie poster"
        
            width="200"
            height="350"
            priority={'42'}

            unoptimized
            
            />
          </Link>
          {isHistory?  (<div>watched on {date?.slice(0,10)}</div>) : ' '}

          </Container>
      </Box>
      
  )
}
export default HistoryPageMovie
