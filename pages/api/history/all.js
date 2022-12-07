import { fetcher } from 'utils/api';
import History from 'models/History';
import dbConnect from 'utils/dbConnect';

const getMovieUrl = (id) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`;

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;


  if(method === 'POST') {
    const test = await History.create(req.body)
    res.status(200).json({
        history: req.body,
        message: 'created the item'
    })
} else if( method === 'GET') {
    const test = await History.find()

    res.status(200).json({
        historylist: test
    })
} else if(method === 'DELETE') {
    const test = await History.remove({id: req.body.id})

    res.status(200).json({
        message: ' deleted the item',
        id: test
    })
}

}
