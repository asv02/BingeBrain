import React, { useEffect } from "react";
import GptSearchBar from "./GptSearchBar";
import { useSelector } from "react-redux";
import useGetMovieInfo from "../hooks/useGetMovieInfo";

function GptSearch() {
  const movies = useSelector((store) => store.GptReducer.recommendedMovie);
  console.log("movies->", movies);
  const recommendedMovies = useGetMovieInfo(movies);
  console.log("recommendedMovies->", recommendedMovies);

  useEffect(()=>
    {
      console.log('recommendedMovies->',recommendedMovies)
    },[recommendedMovies])
  

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center pt-[5vh]">
      <div className="w-full max-w-4xl px-4">
        <GptSearchBar />
      </div>
      <div>
        {recommendedMovies.map((res) => {
          const posterPath = res.poster_path;
          return <MovieCard posterPath={posterPath} />;
        })}
      </div>
    </div>
  );
}

export default GptSearch;
