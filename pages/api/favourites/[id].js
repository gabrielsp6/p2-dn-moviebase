import { fetcher } from "utils/api";
import dbConnect from 'utils/dbConnect';
import Favourites from 'models/Favourites';

// api used for individual item from favourite list 
const getMovieUrl = (id) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`;


export default async function handler(req, res) {
    await dbConnect();

    const {id} = req.query


    if(req.method === 'PUT') {

        const movie = await fetcher(getMovieUrl(id));
        const favourites = new Favourites({ id, title: movie.title });
        await favourites.save();
    
        res.status(200).json({ found: true });
      
    } else if( req.method === 'GET') {
        const favourites = await Favourites.findOne({ id });

        if (favourites) {
          res.status(200).json({ found: true });
        } else {
          res.status(404).json({ found: false });
        }
    } else if(req.method === 'DELETE') {
        await Favourites.deleteOne({ id });
        res.status(200).json({ found: false });
    }

   
}