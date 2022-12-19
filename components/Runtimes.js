import {

  Heading
} from '@chakra-ui/react';
import { useState, useEffect } from "react";
import calculateRuntime from 'utils/calculateRuntime';



const Runtimes = () => {

    const [runtimes, setRuntimes] = useState([])

    const getRuntimes = async () => {
      const response = await calculateRuntime()
      const responseJson = await response
  
  
      if(responseJson) {
        const newRunTimes = responseJson.reduce(function(acc, value){
          return acc+value
        }, 0)
        setRuntimes(newRunTimes)
      }
    }
  
    useEffect( () => {
      getRuntimes();
      }, [])
    if(!runtimes) {
        return (
        <Heading as="h2" size={'md'} color={"#805AD5"}>
            {'Add movies to this list, to calculate how long it would take you to watch...'}
        </Heading>
        )
    }
    if(runtimes)
    return (

        <Heading as="h2" size={'md'}>
            {'This list would take you to watch '}
            {JSON.stringify(String(runtimes/60)).slice(1,6)} hours {runtimes%60 == 0 ? ' '  : runtimes%60 + ' minutes'}
        </Heading>

    )
}

export default Runtimes
