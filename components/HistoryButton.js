import { CalendarIcon } from '@chakra-ui/icons';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useSWR, { useSWRConfig } from 'swr';
import { fetcher } from 'utils/api';

export default function HistoryButton() {
  const { id } = useRouter().query;
  const { data } = useSWR(`/api/history/${id}`);
  const { mutate } = useSWRConfig();


  const deleteFromWatchList= async (movieId) => {
    await fetch(`http://localhost:3000/api/watchlist/movie`, {
      method: 'DELETE',
      body: JSON.stringify({
        id: movieId
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <Tooltip label={data?.found ? 'Remove from history' : 'Add to history'}>
      <IconButton
        isLoading={!data}
        colorScheme={data?.found ? 'purple' : 'gray'}
        size="sm"
        onClick={() => {
          mutate(`/api/history/${id}`, () =>
            fetcher(`/api/history/${id}`, {
              method: data.found ? 'DELETE' : 'PUT',
            })
          );
          ////THE MOVIE SHOULD BE DELETED FROM WATCHLIST AFTER IT IS SEEN (HISTORY)
          ////FETCHER WAY OF DELETING MOVIE FROM WATCHLIST CURRENTLY IN PROGRESS
          // fetcher('http://localhost:3000/api/watchlist/movie', {
          //   method: 'DELETE',
          //   body: JSON.stringify({
          //     id: id
          //   }),
          //   headers: {
          //     'Content-Type': 'application-json'
          //   }
          // })
          deleteFromWatchList(id)





        }}
      >
        <CalendarIcon />
      </IconButton>
    </Tooltip>
  );
}
