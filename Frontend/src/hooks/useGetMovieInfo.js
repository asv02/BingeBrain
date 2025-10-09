import { useEffect } from "react";
import { GET_TMDB_API_OPTIONS } from "../utils/constants";

const fetchRecommendedMovie = async ({ moviename }) => {
  const nowPlaying = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" + moviename,
    GET_TMDB_API_OPTIONS
  );
  if (!nowPlaying.ok) {
    console.log("Error in fetching movies");
    return;
  }
  const data = await nowPlaying.json();
  return data;
};

const useGetMovieInfo = (movieList) => {
  let data=[];
  useEffect(() => {
    (() => {
         movieList.forEach(async element => {
              console.log('element->',element)
              const ele = await fetchRecommendedMovie(element);
              data.push(ele?.results[0])
         });
    })();
  }, []);
  return data;
};

export default useGetMovieInfo;
