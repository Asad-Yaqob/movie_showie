import React from 'react'
import MovieCard from './reuseable/MovieCard'
import { moviesList } from "../data/movies.js";

const Body = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center my-6">
        {moviesList.map((value) => (
          <div key={value.id} className="flex">
            <MovieCard movie={value} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Body
