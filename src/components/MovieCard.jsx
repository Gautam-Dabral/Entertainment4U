import React from 'react';

const MovieCard = (props) => {
  return (
    <div className="movie" key={props.movie.imdbID} onClick={() => props.handleClick(props.movie.imdbID)}>
      <div>
        <p>{props.movie.Year}</p>
      </div>

      <div>
        <img src={props.movie.Poster !== "N/A" ? props.movie.Poster : "https://via.placeholder.com/400"} alt={props.movie.Title} />
      </div>

      <div>
        <span>{props.movie.Type}</span>
        <h3>{props.movie.Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;