import useSWR from "swr";
import Movie from "components/Movie";
import {
  Stack,
  Progress
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

  return (
    <Stack m={'33px'}  flexWrap="wrap" mb="4" direction={'row'}>
      {data.historylist ? data.historylist?.map((movie, index)=> 
        <Movie key={index} onDelete={onDelete} id={movie.id}/>
      ) : 'Loading History List'} 
    </Stack>
  )
}

export default HistoryList
