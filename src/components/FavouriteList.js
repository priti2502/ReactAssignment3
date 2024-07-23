// src/components/FavouritesList.js
import React, { useEffect, useState } from 'react';

function FavouriteList() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetchFavourites();
  }, []);

  const fetchFavourites = () => {
    fetch('http://localhost:3000/favourites')
      .then(response => response.json())
      .then(data => setFavourites(data))
      .catch(error => console.error('Error fetching favourites:', error));
  };

  const removeFavourite = (id) => {
    fetch(`http://localhost:3000/favourites/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        alert("movie removed successfully")
        setFavourites(favourites.filter(favourite => favourite.id !== id));
      })
      .catch(error => console.error('Error removing favourite:', error));
  };

  return (
    <ul id="favouritesList" className="list-group ">
      {favourites.map(favourite => (
        <li key={favourite.id} className="list-group-item mb-5  d-flex flex-column align-items-center">
          <img src={favourite.posterPath} alt={favourite.title} className="img-thumbnail" />
          <h5 >{favourite.title}</h5>
          <button className="btn btn-primary mt-2 " onClick={() => removeFavourite(favourite.id)}>
            Delete from Favourites
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FavouriteList;
