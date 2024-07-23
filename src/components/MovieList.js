// src/components/MovieList.js
import React from 'react';
import MovieItem from './MovieItem';

function MovieList({ movies, addFavourite ,onSave}) {
  return (
    <ul id="moviesList" className="list-group">
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} addFavourite={addFavourite} onSave={onSave} />
      ))}
    </ul>
  );
}

export default MovieList;
