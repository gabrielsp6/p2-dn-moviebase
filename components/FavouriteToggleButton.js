import { AddIcon } from "@chakra-ui/icons";
import { IconButton, Tooltip, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import { fetcher } from "utils/api";

export default function FavouriteToggleButton({ ID }) {
  let { id } = useRouter().query;
  if (!id) {
    id = ID;
  }
  const { data } = useSWR(`/api/favourites/${id}`);
  const { mutate } = useSWRConfig();
  return (
    <Tooltip label={data?.found ? "Remove from Favourites" : "Add to Favourites"}>
      <Button
        isLoading={!data}
        color={data?.found ? "white" : "gray"}
        colorScheme={data?.found ? "purple" : "gray"}
        size="sm"
        onClick={() => {
          mutate(`/api/favourites/${id}`, () =>
            fetcher(`/api/favourites/${id}`, {
              method: data.found ? "DELETE" : "PUT",
            })
          );
        }}
      >
        {data?.found ? "Remove from Favourites" : "Add to Favourites"}
      </Button>
    </Tooltip>
  );
}
