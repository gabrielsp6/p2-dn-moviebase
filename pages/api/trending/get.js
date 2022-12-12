import { fetcher } from 'utils/api';

const getTrending = () =>
  `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.TMDB_API_KEY}`;

export default async function handler(req, res) {
  const trendingContent = await fetcher(getTrending(req.query.id));

  res.status(200).json(trendingContent);
}
