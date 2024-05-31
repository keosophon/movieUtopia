import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./components/MovieCard";
import { useState, useEffect } from "react";

const API_URL = "http://www.omdbapi.com?apikey=947af9f";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieSearchTerm, setMovieSearchTerm] = useState("");

  const movieSearch = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  useEffect(() => {
    movieSearch("batman");
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Welcome To Movie Utopia</h1>
      <div className="mb-4">
        <input
          type="text"
          value={movieSearchTerm}
          onChange={(e) => setMovieSearchTerm(e.target.value)}
          className="form-control"
          placeholder="Search for movies"
        />
        <button 
          onClick={() => movieSearch(movieSearchTerm)} 
          className="btn btn-primary mt-2"
        >
          Search
        </button>
      </div>
      <div className="row">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p>Movie not found!</p>
        )}
      </div>
    </div>
  );
}

export default App;
