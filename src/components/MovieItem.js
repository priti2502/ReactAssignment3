
import React, { useState } from 'react';
import EditMovieForm from './EditForm';


function MovieItem({ movie, addFavourite, onSave }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedMovie) => {
    onSave(updatedMovie);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item mb-5 d-flex flex-column align-items-center">
      {isEditing ? (
        <EditMovieForm movie={movie} onSave={handleSave} onCancel={() => setIsEditing(false)} />
      ) : (
        <>
          <img src={movie.posterPath} alt={movie.title} className="img-thumbnail" />
          <h5 className="text-center">{movie.title}</h5>
          <div>
          <button className="btn btn-primary mt-2 mr-2" onClick={() => addFavourite(movie.id)}>
            Add to Favourites
          </button>
          <button className="btn btn-danger mt-2" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          </div>
        </>
      )}
    </li>
  );
}

export default MovieItem;
