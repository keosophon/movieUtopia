import React from 'react';

function MovieCard({ movie }) {
  const { Title, Year, imdbID, Type, Poster } = movie;
  
  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img
          src={Poster !== "N/A" ? Poster : "https://placehold.co/400"}
          alt="Movie Poster"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{Year}</h6>
          <p className="card-text">{Type}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
