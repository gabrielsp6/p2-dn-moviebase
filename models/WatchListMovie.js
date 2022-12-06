import mongoose from 'mongoose';

global.models = global.models || {};

global.models.WatchListMovie =
  global.models.WatchListMovie ||
  mongoose.model('WatchListMovie', {
    id: String,
    poster_path: String,
    title: String,
    vote_average: Number,
    genres: { type: Array},
    runtime: Number
  });

export default global.models.WatchListMovie;
