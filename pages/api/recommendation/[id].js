import { fetcher } from 'utils/api';

const getMovieUrl = (id) =>
  `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_API_KEY}`;

export default async function handler(req, res) {

  const { method } = req;

  if( method === 'GET') {
      const results = await fetcher(getMovieUrl(req.query.id));
      res.status(200).json({
          recommendations:results
      })
  }

}
