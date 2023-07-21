## Moviebase

![movie.png](./docs/movie.png)

## Setup guide
1. Clone the repository
2. Install the necessary dependencies
3. Set up your environment variables by creating a .env.local file and filling in the required values.
```
TMDB_API_KEY="<your_tmdb_api_key>"
MONGO_URL="<your_mongo_database_url>"
```
4. Start the development server
 ``` npm run dev ```
5. Access the page via http://localhost:3000/

## Features 
- Search Movies: 🔍 Easily find and view details for each movie in the database.
- Favorites: ❤️ Create your list of favorite movies for quick access and future reference.
- History: 🕒 Keep track of the movies you've watched by adding them to the history list.
- Watchlist: 📝 Curate your watchlist and prioritize movies you plan to watch.
- Collections: 🎬 Discover pre-made movie lists curated for different themes or genres. Add them directly to your favorites.
- Genre Percentage: 🎥 The watchlist shows the percentage of each genre contained in the movie list.
- Total Time: ⏰ Calculate the total time needed to watch all the movies in your favorites list.
- Recommendations: 🎯 Get personalized movie recommendations based on your favorite and watchlist selections.
