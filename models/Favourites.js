import mongoose from 'mongoose';

global.models = global.models || {};

global.models.Favourites =
  global.models.Favourites ||
  mongoose.model('Favourites', {
    id: String,
    title: String,
  });

export default global.models.Favourites;
