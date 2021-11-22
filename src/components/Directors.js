import React from 'react';
import { directors } from '../data';

const generateMovies = movies => {
  return movies.map(movie => <li>{movie}</li>)
}

const makeDirector = director => {
  return (
    <div>
      Name: {director.name}
      <br></br><br></br>
      Movies:
      <ul>
        {generateMovies(director.movies)}
      </ul>
    </div>
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page:</h1>
      {directors.map(director => makeDirector(director))}
    </div>
  );
}

export default Directors
