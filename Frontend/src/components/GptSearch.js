import React, { useEffect } from "react";
import GptSearchBar from "./GptSearchBar";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import useGetMovieInfo from "../hooks/useGetMovieInfo";

function GptSearch() {
  const movies = useSelector((store) => store.GptReducer.recommendedMovie);
  const recommendedMovies = useGetMovieInfo(movies); 

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-[10vh] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <GptSearchBar />
      </div>
      {recommendedMovies && recommendedMovies.length > 0 && (
        <div className="mx-auto w-full max-w-6xl mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 place-items-center">
            {recommendedMovies.map((res) => {
              const posterPath = res?.poster_path;
              return <MovieCard key={res?.id} posterPath={posterPath} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default GptSearch;
