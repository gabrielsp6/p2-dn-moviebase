import { AddIcon } from "@chakra-ui/icons";
import { Button, IconButton, Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import { fetcher } from "utils/api";

export default function WatchListToggleButton({ ID }) {
  let { id } = useRouter().query;
  if (!id) {
    id = ID;
  }
  const { data } = useSWR(`/api/watchlist/${id}`);
  const { mutate } = useSWRConfig();
  return (
    <Tooltip label={data?.found ? "Remove from Watchlist" : "Add to Watchlist"}>
      <Button
        isLoading={!data}
        color={data?.found ? "white" : "gray"}
        colorScheme={data?.found ? "purple" : "gray"}
        size="sm"
        onClick={() => {
          mutate(`/api/watchlist/${id}`, () =>
            fetcher(`/api/watchlist/${id}`, {
              method: data.found ? "DELETE" : "PUT",
            })
          );
        }}
      >
       {data?.found ? "Remove from Watchlist" : "Add to Watchlist"}
      </Button>
    
    </Tooltip>
  );
}
