import { 
  Container,
    Wrap, 
    WrapItem 
} from '@chakra-ui/react'
import ActorCard from "./ActorCard";

const ActorsList = ({cast}) => {

  return (
    <Wrap >

      {cast ? cast?.slice(0,5).map((actor, index)=> 
        <ActorCard id={actor.id} key={index} actor={actor}/>
        ) : 'Loading Actor'} 
    </Wrap>

  )
}

export default ActorsList
