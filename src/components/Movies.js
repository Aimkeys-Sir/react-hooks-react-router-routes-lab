import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies)
  return <div>
    <h1>Movies Page</h1>
    {movies.map(movie=>{
      return (
        <div key={movie.title}>
          <h3>{movie.title}</h3>
          <h4>{movie.time} min</h4>
          <ul>
            {movie.genres.map((genre,index)=>{
              return <li key={index}>{genre}</li>
            })}
          </ul>
          </div>
      )
      
    })}
    <ul></ul>
  </div>;
}

export default Movies;
