// src/components/EditMovieForm.js
import React, { useState } from 'react';

function EditMovieForm({ movie, onSave, onCancel }) {
  const [title, setTitle] = useState(movie.title);
  const [posterPath, setPosterPath] = useState(movie.posterPath);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMovie = { ...movie, title, posterPath };
    onSave(updatedMovie);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-movie-form">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Poster Path</label>
        <input
          type="text"
          className="form-control"
          value={posterPath}
          onChange={(e) => setPosterPath(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <button type="submit" className="btn btn-primary mr-2">Save</button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default EditMovieForm;
