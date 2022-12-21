import useSWR from 'swr';
import React, {useEffect, useState} from 'react'
import { buildImageUrl } from 'utils/api';
import Image from 'next/image';

import {
    Box,
    Button,
    Center,
    CircularProgress,
    Container,
    Text,
    Heading,
    Link,
    transition
  } from '@chakra-ui/react';

const ActorCard = ({id, actor}) => {

  return (
    <Box key={id}
    margin={'20px'}

    >


          <Box minW="100px"
          pos="relative"
          width='100px' 
          
          marginLeft={'10px'}
          >
          
              <Image 
                src={buildImageUrl(actor.profile_path, 'w300')}
                alt="Actor Image"
                width="150"
                height="250"
                unoptimized 
                />
          </Box>
      <Text>
        {actor.original_name}
      </Text>

    </Box>
  )
}

export default ActorCard
