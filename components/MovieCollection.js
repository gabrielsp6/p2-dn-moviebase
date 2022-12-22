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

    async function addCollection() {
      const response = await fetch('http://localhost:3000/api/favourites/addcollection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          list: list
        })
      })
      const data = await response.json()
      console.log(data)
    }

    async function deleteCollection() {
      const response = await fetch('http://localhost:3000/api/favourites/addcollection', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          list: list
        })
      })
      const data = await response.json()
      console.log(data)
    }

  
    return (
      <Container>

      <Button onClick={() => setIsOpen(true)} width={"400px"} height={"500px"} display={'flex'} flexDirection={'column'}>
        <Text mb={'10px'} fontSize='m'>{title}</Text>
        <Image 
        src={buildImageUrl(posterUrl, 'w300')}
        alt="Movie poster"
        width="300"
        height="300"
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
               
              
                  <Button onClick={addCollection} marginLeft={'10px'}>
                  Add to Favourites
                  </Button>
                  <Button onClick={deleteCollection} marginLeft={'10px'}>
                  Delete from Favourites
                  </Button>
                  <Button onClick={() => setIsOpen(false)} marginLeft={'10px'}>Cancel</Button>
                </ModalFooter>

                
              </ModalContent>
            </Modal>

          </Container>
  
    )
  }
  
  export default MovieCollection
  