import { 
    Wrap, 
    WrapItem 
} from '@chakra-ui/react'
import RecommendationCard from "./RecommendationCard";

const Recommendations = ({movies}) => {

  return (
    <Wrap className="">
      {movies ? movies?.map((movie, index)=> 
        <RecommendationCard id={movie.id} key={index}/>
      ) : 'Loading Recommendations'} 
    </Wrap>
  )
}

export default Recommendations
