import { fetcher } from "utils/api";
import dbConnect from 'utils/dbConnect';
import WatchListMovie from 'models/WatchListMovie';

// api used for individual item from watchlist list 
const getMovieUrl = (id) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`;


export default async function handler(req, res) {
    await dbConnect();

    const {id} = req.query


    if(req.method === 'PUT') {

        const movie = await fetcher(getMovieUrl(id));
        const watchlist = new WatchListMovie({ id, title: movie.title });
        await watchlist.save();
    
        res.status(200).json({ found: true });
      
    } else if( req.method === 'GET') {
        const watchlist = await WatchListMovie.findOne({ id });

        if (watchlist) {
          res.status(200).json({ found: true });
        } else {
          res.status(404).json({ found: false });
        }
    } else if(req.method === 'DELETE') {
        await WatchListMovie.deleteOne({ id });
        res.status(200).json({ found: false });
    }

   
}