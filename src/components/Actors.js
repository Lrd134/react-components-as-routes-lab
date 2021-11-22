import React from 'react';
import { actors } from '../data';

const generateMovies = movies => {
  return movies.map(movie => <li>{movie}</li>)
}

const makeActor = actor => {
  return (
    <div>
      Name: {actor.name}
      <br></br><br></br>
      Movies:
      <ul>
        {generateMovies(actor.movies)}
      </ul>
    </div>
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page:</h1>
      {actors.map(actor => makeActor(actor))}
    </div>
  );
};

export default Actors;
