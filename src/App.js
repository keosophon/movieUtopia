import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./components/MovieCard";
import { useState, useEffect } from "react";

const API_URL = "http://www.omdbapi.com?apikey=947af9f";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieSearchTearm, setMovieSearchTerm] = useState("");

  const movieSearch = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    movieSearch("batman");
  }, []);

  return (
    <div>
      <div>Welcme To Movie Utopia</div>
      <div>
        <input
          type="text"
          value={movieSearchTearm}
          onChange={(e) => setMovieSearchTerm(e.target.value)}
        />
        <button onClick={() => movieSearch(movieSearchTearm)}>Search</button>
      </div>
      <div>
        {movies?.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} />)
        ) : (
          <p>Movie not found!</p>
        )}
      </div>
    </div>
  );
}

export default App;
