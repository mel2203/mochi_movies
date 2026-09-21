import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Avatar", release_date: "2018" },
    { id: 3, title: "Game of Thrones", release_date: "2016" },
    { id: 4, title: "Hobbit", release_date: "2015" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ),
          //map function iterates over the array to return the movies
          //.key property as a unique identifier
        )}
      </div>
    </div>
  );
}

export default Home;
