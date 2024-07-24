// src/App.js
import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import FavouriteList from "./components/FavouriteList";

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));

    fetch("http://localhost:3000/favourites")
      .then((response) => response.json())
      .then((data) => setFavourites(data))
      .catch((error) => console.error("Error fetching favourites:", error));
  }, []);

  const isMovieAlreadyInFavSection = (id) => {
    for (let i = 0; i < favourites.length; i++) {
      if (id == favourites[i].id) {
        return true;
      }
    }

    return false;
  };

  const addFavourite = (movieId) => {
    if (isMovieAlreadyInFavSection(movieId)) {
      alert("Movie is already in favourites");
      return;
    }
    fetch(`http://localhost:3000/movies/${movieId}`)
      .then((response) => response.json())
      .then((movie) => {
        fetch("http://localhost:3000/favourites", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(movie),
        })
          .then(() => {
            alert("movie added");
            setFavourites((prev) => [...prev, movie]);
          })
          .catch((error) => console.error("Error adding favourite:", error));
      })
      .catch((error) => console.error("Error fetching movie:", error));
  };

  const removeFavourite = (id) => {
    fetch(`http://localhost:3000/favourites/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setFavourites((prevFavourites) =>
          prevFavourites.filter((movie) => movie.id !== id)
        );
      })
      .catch((error) => console.error("Error deleting favourite:", error));
  };

  const saveMovie = (updatedMovie) => {
    fetch(`http://localhost:3000/movies/${updatedMovie.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMovie),
    })
      .then(() => {
        setMovies((prevMovies) =>
          prevMovies.map((movie) =>
            movie.id === updatedMovie.id ? updatedMovie : movie
          )
        );
      })
      .catch((error) => console.error("Error updating movie:", error));
  };

  return (
    <div className="container my-3">

      <div className="row ">
        <div className="col-12 col-md-6 ">
          <h2 className="text-center">Movies</h2>
          <MovieList
            movies={movies}
            addFavourite={addFavourite}
            onSave={saveMovie}
          />
        </div>
        <div className="col-12 col-md-6">
          <h2 className="text-center">Favourites</h2>
          <FavouriteList
            favourites={favourites}
            removeFavourite={removeFavourite}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
