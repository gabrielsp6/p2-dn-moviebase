import mongoose from 'mongoose';

global.models = global.models || {};

global.models.Favourites =
  global.models.Favourites ||
  mongoose.model('Favourites', {
    id: String,
    poster_path: String,
    title: String,
    vote_average: Number,
    genres: { type: Array},
    runtime: Number
  });

export default global.models.Favourites;
