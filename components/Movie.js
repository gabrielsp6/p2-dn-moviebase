import { useRouter } from 'next/router';
import useSWR from 'swr';
import React, {useEffect, useState} from 'react'
import { buildImageUrl, fetcher } from 'utils/api';
import HistoryButton from 'components/HistoryButton';
import Image from 'next/image';

import {
    Box,
    Button,
    Center,
    CircularProgress,
    Container,
    Text,
    InputGroup,
    Input
  } from '@chakra-ui/react';
import { useSWRConfig } from "swr";

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
    <div key={id}>

      <Box minW="200px"
      pos="relative"
       width='200px' 
       _groupHover={{ color: 'tomato' }}
       >
        <Container>


        {data ? data.title : 'loading movie details --- please wait'}

        <Button onClick={() => onDelete(id)}
         cursor='pointer'
          position={'absolute'}
          bottom='30%'
          left='30%'
          >

        Delete
        </Button>

        <Image
          src={buildImageUrl(data.poster_path, 'w300')}
          alt="Movie poster"
      
          width="200"
          height="350"
     
          unoptimized
          />
          {isHistory?  (<Container>watched : {date?.slice(0,10)}</Container>) : ' '}
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
          </Container>
      </Box>
    </div>
  )
}

export default Movie
