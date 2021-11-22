import React from 'react';
import { movies } from '../data';

const generateGenres = genres => {
  return genres.map(genre => <li>{genre}</li>)
}
const Movie = movie => {
  return (
    <div>
      Name: {movie.title}
      <br></br><br></br>
      Time: {movie.time}
      <br></br><br></br>
      Genres:
      <ul>
        {generateGenres(movie.genres)}
      </ul>
      <br></br>
    </div>
  )
}
const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => Movie(movie))}       
    </div>
  );
};

export default Movies;
