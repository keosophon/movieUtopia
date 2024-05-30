import React from 'react';

function MovieCard({movie}) {
    const { Title, Year, imdbID, Type, Poster } = movie;
  return (
    <div key={imdbID}>
        <h5>{Title}</h5>
        <h6>{Year}</h6>
          <img
            src={Poster !== "N/A" ? Poster : "https://placehold.co/400"}
            alt="Movie Poster"
          />
        <p>{Type}</p>
    </div>
  );
}

export default MovieCard;
