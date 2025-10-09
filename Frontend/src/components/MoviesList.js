import React from "react";
import MovieCard from "./MovieCard";

function MoviesList({ moviesList }) {
  ////console.log("now->", moviesList);
  return (
    <div className="relative">
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700/70 scrollbar-track-transparent px-4 md:px-6 snap-x snap-mandatory">
        {moviesList?.map((res) => (
          <MovieCard key={res.id} posterPath={res.poster_path} />
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
