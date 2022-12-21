import useSWR from "swr";
import HistoryPageMovie from "components/HistoryPageMovie";
import {
  Stack,
  Progress,
  Heading
} from '@chakra-ui/react';

const HistoryList = ({movies, onDelete}) => {

  const { data, error } = useSWR(`/api/history/all`);


  if (error) {
    return (
      <Text color="red">
        Error fetching list: {JSON.stringify(error)}
      </Text>
    );
  }
  if (!data) {
    return <Progress size="xs" isIndeterminate />;
  }

  if (data.success === false) {
    return <Text color="red">{data.status_message}</Text>;
  }
  if(data.historylist.length == 0 ) {
    return ( 
    <Heading as="h2" size={'md'}>
      {'Add movies to this list...'}
    </Heading>
    )
  }
  return (
    <Stack m={'33px'}  flexWrap="wrap" mb="4" direction={'row'} >
      {data.historylist ? data.historylist?.map((movie, index)=>
        <HistoryPageMovie key={index} onDelete={onDelete} id={movie.id} isHistory={true} date={movie.date}/>
      ) : 'Loading History List'} 
    </Stack>
  )
}

export default HistoryList
