const BASE_URL = "https://api.sampleapis.com/movies/drama"

export async function getMovies() {
    const response = await fetch(BASE_URL);
    if(!response.ok) {
        throw new Error ('Failed to fetch movies');
    }
      return response.json();
}

export async function searchMovies(query) {
    const movies = await getMovies();
return movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase()),
  );
}

