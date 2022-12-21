import { 
    Container,
      Wrap, 
      WrapItem,
      Box,
      Modal, 
      ModalOverlay,
      ModalContent,
      ModalHeader,
      ModalCloseButton,
      ModalBody,
      ModalFooter,
      Button,
      Text

  } from '@chakra-ui/react'
  import MovieSmall from "./MovieSmall";
  import Image from 'next/image';
  import { buildImageUrl } from 'utils/api';
  import useSWR from 'swr';

  import { ArrowRightIcon, ArrowLeftIcon  } from '@chakra-ui/icons';
import React, {useEffect, useState, useRef} from 'react'


  
  const MovieCollection = ({list, title, posterUrl, totalRuntime, comment}) => {
    const scrollableContent = useRef(null);
    const [isOpen, setIsOpen] = useState(false)
  
    return (
      <Container>

      <Button onClick={() => setIsOpen(true)} width={"200px"} height={"300px"} display={'flex'} flexDirection={'column'}>
        <Text mb={'10px'} fontSize='m'>{title}</Text>
        <Image 
        src={buildImageUrl(posterUrl, 'w300')}
        alt="Movie poster"
        width="200"
        height="200"
        unoptimized 
        rounded="5%"
        />
        </Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} >
              <ModalOverlay />
              <ModalContent maxW={'900px'} width={'650px'} bg='#9E86D5' rounded={'5px'}>
                <ModalHeader fontSize={'2xl'}>{title}</ModalHeader>
                <Container marginLeft={'40px'}>

                <Text>This collection takes {totalRuntime} to watch</Text> 
                </Container>
                <ModalCloseButton />
                <ModalBody>
                  <Box overflowX="hidden"
                   overflowY="hidden"
                    height="250px"
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems="center"
                    ref={scrollableContent}
                    boxShadow="2px 4px 8px rgba(5, 5, 5, 0.5)"
                    rounded={'20px'}
                    
                       >
                    
                    {list ? list?.map((movie, index)=> 
                      <MovieSmall id={movie.id} key={index} />
                      ) : 'Loading movie'} 
                  </Box>
                </ModalBody>
                <Container   display="flex" justifyContent="center" alignItems="center" >

                <Button onClick={() => scrollableContent.current.scrollBy(-500, 0)} margin={'20px'}><ArrowLeftIcon /></Button>
                <Button onClick={() => scrollableContent.current.scrollBy(500, 0)}><ArrowRightIcon /></Button>
                </Container>
                <ModalFooter>
                  <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                </ModalFooter>

                
              </ModalContent>
            </Modal>
      
          </Container>
  
    )
  }
  
  export default MovieCollection
  