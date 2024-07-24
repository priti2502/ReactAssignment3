
import React, { useEffect, useState } from 'react';

function FavouriteList({favourites,removeFavourite}) {
  

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
